import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import KarmaCounter from "../KarmaCounter";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    width: "100%",
    minWidth: 275,
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
    fontSize: 14,
  },
  text: {
    fontSize: 16,
  },
}));

const CommentCard = (props) => {
  const { postId, comment } = props;
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <Card className={classes.root} variant="outlined">
        <Wrapper>
          <KarmaCounter
            postId={postId}
            userVoteDirection={comment.userVoteDirection}
            votesCount={comment.votesCount}
            commentId={comment.commentId}
          />
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {comment.username}
            </Typography>
            <Typography className={classes.text}>{comment.text}</Typography>
          </CardContent>
        </Wrapper>
      </Card>
    </Container>
  );
};

export default CommentCard;
