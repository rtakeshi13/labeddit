import React from "react";
import { useHistory, useParams } from "react-router-dom";

import usePostDetail from "../../hooks/usePostDetail";
import PostCard from "../PostCard";
import CommentCard from "../CommentCard";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Helmet } from "react-helmet-async";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
}));

const PostPage = () => {
  const classes = useStyles();
  const { postId } = useParams();
  const [post] = usePostDetail(postId);
  const history = useHistory();

  return post ? (
    <div>
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
      />
      {post.comments.map((comment) => {
        return (
          <CommentCard
            key={comment.id}
            userName={comment.username}
            text={comment.text}
            votesCount={comment.votesCount}
            postId={post.id}
            commentId={comment.id}
            userVoteDirection={comment.userVoteDirection}
          />
        );
      })}
    </div>
  ) : (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default PostPage;
