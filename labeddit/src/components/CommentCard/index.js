import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { KarmaContainer } from './styles'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';

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
  const classes = useStyles()
  const history = useHistory();
  return (
    <Container component="main" maxWidth="sm">
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography>{props.userName}</Typography>
                <p>{props.text}</p>
                <KarmaContainer>
                    <button>seta pra cima</button>
                    <p>{props.votesCount}</p>
                    <button>seta pra baixo</button>
                </KarmaContainer>
            </CardContent>
        </Card>
      
    </Container>
  );
};

export default CommentCard;
