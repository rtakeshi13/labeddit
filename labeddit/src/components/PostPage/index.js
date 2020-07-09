import React from "react";
import { useHistory, useParams } from "react-router-dom";
<<<<<<< HEAD

import usePostDetail from "../../hooks/usePostDetail";
import PostCard from "../PostCard"
import CommentCard from "../CommentCard"

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
}));


const PostPage = () => {
  const classes = useStyles()
=======
import styled from 'styled-components'

import usePostDetail from "../../hooks/usePostDetail";
import PostCard from "../PostCard";
import CommentCard from "../CommentCard";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Helmet } from "react-helmet-async";

const Container = styled.div`
    margin-bottom: 16px;
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
  const classes = useStyles();
>>>>>>> fa8d399a2691c984059e71a06af88c5213aa611c
  const { postId } = useParams();
  const [post] = usePostDetail(postId);
  const history = useHistory();

  return post ? (
<<<<<<< HEAD
                <div>
                    <PostCard
                        key={post.id}
                        postId={post.id}
                        userName={post.username}
                        title={post.title}
                        text={post.text}
                        commentsCount={post.commentsCount}
                        votesCount={post.votesCount}
                    />
                    {post.comments.map(comment => {
                        return (
                        <CommentCard
                            key={comment.id}
                            userName={comment.username}
                            text={comment.text}
                            votesCount={comment.votesCount}
                        
                        />
                        )
                        
                    })}
                </div>
                ) : (
                      <div className={classes.root}>
                        <CircularProgress color="secondary"/>
                      </div>  
                    )    
=======
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
    </Container>
  ) : (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
>>>>>>> fa8d399a2691c984059e71a06af88c5213aa611c
};

export default PostPage;
