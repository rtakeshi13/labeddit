import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
<<<<<<< HEAD
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { languages } from "../../languages";
import LanguageContext from "../../contexts/LanguageContext";


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
      marginBottom: 12,
    },
  }));
  
=======
import { makeStyles } from "@material-ui/core/styles";

import {
    WhatsappShareButton,
    WhatsappIcon,
    FacebookIcon,
    FacebookShareButton,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    TwitterIcon,
    TwitterShareButton,
    EmailIcon,
    EmailShareButton,
} from 'react-share'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

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

    div > *{
        margin: 4px;
    }
`

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
>>>>>>> fa8d399a2691c984059e71a06af88c5213aa611c

const PostCard = (props) => {
  const selectedLanguage = useContext(LanguageContext);
  const classes = useStyles();
  const history = useHistory();

  const shareUrl = window.location.href
  const title = "labeddit"

  const handleCommentClick = (postId) => history.push(`posts/${postId}`);

  return (
<<<<<<< HEAD
    <Container component="main" maxWidth="sm" >
        <Card className={classes.root} variant="outlined">
          <CardContent className={classes.content}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {props.userName}
              </Typography>
              <Typography className={classes.pos} variant="h5" component="h2">
                  {props.title}
              </Typography>
              <Typography className={classes.pos} variant="body2" component="p">
                  {props.text}
              </Typography>
              <CardActions>
                  <Typography>
                      {props.commentsCount} {languages[selectedLanguage].commentCounterText}
                  </Typography>
              </CardActions>
          </CardContent>
        </Card>
=======
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
            <CardFooter>
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

                <Comments variant="subtitle2">
                  {props.commentsCount}{" "}
                  {languages[selectedLanguage].commentCounterText}
                </Comments>
            </CardFooter>
            
          </Content>
        </Wrapper>
      </Card>
>>>>>>> fa8d399a2691c984059e71a06af88c5213aa611c
    </Container>
  );
};

export default PostCard;
