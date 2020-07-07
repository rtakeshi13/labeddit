import React from "react";
import { Wrapper } from './styles'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      width: "50%",  
      minWidth: 275,
    },
    title: {
      fontSize: 16,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

const PostCard = (props) => {
  const classes = useStyles();
  const history = useHistory();


  return (
    <Wrapper>
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
                  <Typography>{props.commentsCount} comentários</Typography>
              </CardActions>
          </CardContent>
        </Card>
    </Wrapper>
  );
};

export default PostCard;
