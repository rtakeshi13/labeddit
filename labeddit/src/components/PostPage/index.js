import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

import { languages } from "../../languages";
import LanguageContext from "../../contexts/LanguageContext";
import usePostDetail from "../../hooks/usePostDetail";
import useForm from "../../hooks/useForm";
import { createComment } from '../../functions/axios'
import PostCard from "../PostCard";
import CommentCard from "../CommentCard";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Helmet } from "react-helmet-async";

const Container = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NewComment = styled.div`
    display: flex;
    flex-direction: column;
`
const Form = styled.form`
    width: 50vw;
    input{
        width: 100%;
    }
    button{
        display: block;
    }
`

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));

const PostPage = () => {
  const selectedLanguage = useContext(LanguageContext);
  const classes = useStyles();
  const { postId } = useParams();
  const [post, getPostDetails] = usePostDetail(postId);
  const [form, handleInputChange, resetForm] = useForm({text: ""})
  const history = useHistory();

  const handleFormSubmit = async (event) => {
      event.preventDefault()
      await createComment(post.id, form)
      resetForm()
      getPostDetails(post.id)
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
          <Form onSubmit={handleFormSubmit} >
              <input 
                name="text"
                value={form.text}
                onChange={handleInputChange}
                placeholder={languages[selectedLanguage].commentPlaceholder}
              />
              <button type="submit">{languages[selectedLanguage].sendComment}</button>
          </Form>
      </NewComment>
      {post.comments.map((comment) => (
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
