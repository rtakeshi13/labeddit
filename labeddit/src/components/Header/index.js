import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    color: {
        background: "#f2f2f2"
    },
  }));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position='static' className={classes.color}>
      <Toolbar>
          <Typography color="secondary" variant="h6" className={classes.title}>
              LOGO
          </Typography>
          <Button
            onClick={() => {
              localStorage.removeItem("labeddit");
              history.push("/login");
            }}
          >
            Logout
          </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
