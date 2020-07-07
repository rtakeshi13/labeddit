import React, { useContext } from "react";
import { Wrapper } from './styles'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import { languages } from "../../languages";
import LanguageContext from "../../contexts/LanguageContext";
import { findByLabelText } from "@testing-library/react";

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
  

const PostCard = (props) => {
  const selectedLanguage = useContext(LanguageContext);
  const classes = useStyles();
  const history = useHistory();


  return (
    <Container component="main" maxWidth="sm" >
        <Card className={classes.root} variant="outlined">
          <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {props.userName}
              </Typography>
              <Typography className={classes.pos} variant="h5" component="h2">
                  {props.title}
              </Typography>
              <Typography className={classes.pos} variant="body2" component="p">
                  {props.text}
              </Typography>
              <hr/>
              <CardActions>
                  <Typography>
                      {props.commentsCount} {languages[selectedLanguage].commentCounterText}
                  </Typography>
              </CardActions>
          </CardContent>
        </Card>
    </Container>
  );
};

export default PostCard;
