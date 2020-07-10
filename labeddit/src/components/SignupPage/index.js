import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";

import { Helmet } from "react-helmet-async";

import { languages } from "../../languages";
import LanguageContext from "../../contexts/LanguageContext";

import { signup } from "../../functions/axios";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      LabEddit9.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const SignupPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [selectedLanguage] = useContext(LanguageContext);

  const [form, handleFormChange] = useForm({
    email: "",
    password: "",
    username: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await signup(form);
    if (response.token) {
      localStorage.setItem("labeddit", JSON.stringify(response));
      history.push("/posts");
    } else {
      window.alert(response.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Helmet>
        <title>{languages[selectedLanguage].signupLabel}</title>
      </Helmet>

      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleFormSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="text"
                name="username"
                placeholder={languages[selectedLanguage].usernameLabel}
                onChange={handleFormChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="email"
                name="email"
                placeholder={languages[selectedLanguage].emailLabel}
                onChange={handleFormChange}
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="password"
                name="password"
                placeholder={languages[selectedLanguage].passwordLabel}
                onChange={handleFormChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {languages[selectedLanguage].signupLabel}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="http://localhost:3000/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignupPage;
