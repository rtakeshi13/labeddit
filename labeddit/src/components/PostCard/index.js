import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { languages } from "../../languages";
import LanguageContext from "../../contexts/LanguageContext";
import KarmaCounter from "../KarmaCounter";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;

  div > * {
    margin: 4px;
  }
`;

const Comments = styled(Link)`
  margin-top: 10px;
  cursor: pointer;
`;

const Content = styled(CardContent)`
  width: 100%;
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
  const [selectedLanguage] = useContext(LanguageContext);
  const classes = useStyles();
  const history = useHistory();

  const shareUrl = `${window.location.href}${
    props.feedpage ? `/${props.postId}` : ""
  }`;
  const title = props.title;

  const handleCommentClick = (postId) =>
    props.feedpage && history.push(`posts/${postId}`);

  return (
    <Container component="main" maxWidth="sm">
      <Card className={classes.root} variant="outlined">
        <Wrapper>
          <KarmaCounter
            userVoteDirection={props.userVoteDirection}
            votesCount={props.votesCount}
            postId={props.postId}
          />
          <Content>
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
            <CardFooter
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Comments
                variant="subtitle2"
                onClick={() => handleCommentClick(props.postId)}
              >
                {props.commentsCount}{" "}
                {languages[selectedLanguage].commentCounterText}
              </Comments>

              <div>
                <FacebookShareButton
                  url={shareUrl}
                  title={title}
                  separator=":: "
                >
                  <FacebookIcon size={24} round />
                </FacebookShareButton>
                <FacebookMessengerShareButton
                  url={shareUrl}
                  title={title}
                  separator=":: "
                >
                  <FacebookMessengerIcon size={24} round />
                </FacebookMessengerShareButton>
                <WhatsappShareButton
                  url={shareUrl}
                  title={title}
                  separator=":: "
                >
                  <WhatsappIcon size={24} round />
                </WhatsappShareButton>
                <TwitterShareButton
                  url={shareUrl}
                  title={title}
                  separator=":: "
                >
                  <TwitterIcon size={24} round />
                </TwitterShareButton>
              </div>
            </CardFooter>
          </Content>
        </Wrapper>
      </Card>
    </Container>
  );
};

export default PostCard;
