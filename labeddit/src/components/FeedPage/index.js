import React, { useState, useContext } from "react";
import usePosts from "../../hooks/usePosts";

import { Helmet } from "react-helmet-async";

import { languages } from "../../languages";
import LanguageContext from "../../contexts/LanguageContext";

import PostForm from "../PostForm";
import PostCard from "../PostCard";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";

import { SortWrapper } from "./styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));

const FeedPage = () => {
  const [posts, getPosts] = usePosts();
  const classes = useStyles();
  const [order, setOrder] = useState("created_new");
  const [selectedLanguage] = useContext(LanguageContext);

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const orderedPosts = posts;
  switch (order) {
    case "created_new":
      orderedPosts.sort((a, b) => b.createdAt - a.createdAt);
      break;
    case "created_old":
      orderedPosts.sort((a, b) => a.createdAt - b.createdAt);
      break;
    case "votes_more":
      orderedPosts.sort((a, b) => b.votesCount - a.votesCount);
      break;
    case "votes_less":
      orderedPosts.sort((a, b) => a.votesCount - b.votesCount);
      break;
    default:
      break;
  }

  return posts.length > 0 ? (
    <div>
      <Helmet>
        <title>LabEddit</title>
      </Helmet>

      <PostForm getPosts={getPosts} />

      <Container maxWidth="md" style={{ marginTop: "20px" }}>
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
      </Container>

      {orderedPosts.map((post) => (
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
          feedpage
        />
      ))}
    </div>
  ) : (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default FeedPage;
