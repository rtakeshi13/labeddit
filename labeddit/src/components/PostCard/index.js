import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { languages } from "../../languages";
import LanguageContext from "../../contexts/LanguageContext";
import KarmaCounter from "../KarmaCounter";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const Comments = styled(Typography)``;

const Content = styled(CardContent)`
  width: 100%;
  cursor: ${({ feedpage }) => feedpage && "pointer"};
`;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    width: "100%",
    minWidth: 275,
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
  },
}));

const PostCard = (props) => {
  const selectedLanguage = useContext(LanguageContext);
  const classes = useStyles();
  const history = useHistory();

  const handleCommentClick = (postId) => history.push(`posts/${postId}`);

  return (
    <Container component="main" maxWidth="sm">
      <Card className={classes.root} variant="outlined">
        <Wrapper>
          <KarmaCounter
            userVoteDirection={props.userVoteDirection}
            votesCount={props.votesCount}
            postId={props.postId}
          />
          <Content
            feedpage={props.feedpage ? 1 : 0}
            onClick={
              props.feedpage ? () => handleCommentClick(props.postId) : null
            }
          >
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {props.userName}
            </Typography>
            <Typography className={classes.pos} variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography className={classes.text}>{props.text}</Typography>
            <Comments variant="subtitle2">
              {props.commentsCount}{" "}
              {languages[selectedLanguage].commentCounterText}
            </Comments>
          </Content>
        </Wrapper>
      </Card>
    </Container>
  );
};

export default PostCard;
