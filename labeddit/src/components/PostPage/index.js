import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import usePostDetail from "../../hooks/usePostDetail";
import useForm from "../../hooks/useForm";

import { Helmet } from "react-helmet-async";

import { languages } from "../../languages";
import LanguageContext from "../../contexts/LanguageContext";

import { createComment } from "../../functions/axios";

import PostCard from "../PostCard";
import CommentCard from "../CommentCard";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import { SortWrapper, Container, NewComment, Form } from "./styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));

const PostPage = () => {
  const [selectedLanguage] = useContext(LanguageContext);
  const classes = useStyles();
  const { postId } = useParams();
  const [post, getPostDetails] = usePostDetail(postId);
  const [form, handleInputChange, resetForm] = useForm({ text: "" });
  const history = useHistory();
  const [order, setOrder] = useState("created_new");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await createComment(post.id, form);
    resetForm();
    getPostDetails(postId);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  let orderedComments;
  if (post) {
    orderedComments = post.comments;
    switch (order) {
      case "created_new":
        orderedComments.sort((a, b) => b.createdAt - a.createdAt);
        break;
      case "created_old":
        orderedComments.sort((a, b) => a.createdAt - b.createdAt);
        break;
      case "votes_more":
        orderedComments.sort((a, b) => b.votesCount - a.votesCount);
        break;
      case "votes_less":
        orderedComments.sort((a, b) => a.votesCount - b.votesCount);
        break;
      default:
        break;
    }
  }

  return post ? (
    <Container>
      <Helmet>
        <title>{post.title}</title>
      </Helmet>
      <PostCard
        key={post.id}
        postId={post.id}
        userName={post.username}
        title={post.title}
        text={post.text}
        commentsCount={post.commentsCount}
        votesCount={post.votesCount}
        userVoteDirection={post.userVoteDirection}
        createdAt={post.createdAt}
      />
      <NewComment>
        <Form onSubmit={handleFormSubmit}>
          <textarea
            name="text"
            value={form.text}
            onChange={handleInputChange}
            placeholder={languages[selectedLanguage].commentPlaceholder}
          />
          <button type="submit">
            {languages[selectedLanguage].sendComment}
          </button>
        </Form>
      </NewComment>
      <SortWrapper>
        <div />
        <label>
          {languages[selectedLanguage].sortLabel}{" "}
          <select onChange={handleOrderChange}>
            <option value="created_new">
              {languages[selectedLanguage].newest}
            </option>
            <option value="created_old">
              {languages[selectedLanguage].oldest}
            </option>
            <option value="votes_more">
              {languages[selectedLanguage].upvotes}
            </option>
            <option value="votes_less">
              {languages[selectedLanguage].downvotes}
            </option>
          </select>
        </label>
      </SortWrapper>
      {orderedComments.map((comment) => (
        <CommentCard key={comment.id} postId={post.id} comment={comment} />
      ))}
    </Container>
  ) : (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default PostPage;
