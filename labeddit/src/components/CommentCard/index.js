import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
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
    border: "1px solid black",
  },
  pos: {
    marginBottom: 12,
  },
}));

const CommentCard = (props) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <Card className={classes.root} variant="outlined">
        <Wrapper>
          <KarmaCounter
            userVoteDirection={props.userVoteDirection}
            votesCount={props.votesCount}
            postId={props.postId}
            commentId={props.commentId}
          />
          <CardContent>
            <Typography>{props.userName}</Typography>
            <p>{props.text}</p>
          </CardContent>
        </Wrapper>
      </Card>
    </Container>
  );
};

export default CommentCard;
