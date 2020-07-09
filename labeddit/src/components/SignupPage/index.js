import React, { useContext } from "react";
import useForm from "../../hooks/useForm";
import { signup } from "../../functions/axios";
import { useHistory } from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const SignupPage = ()=>{
    const history = useHistory();

    const [form, handleFormChange] = useForm({ email: "", password: "", username: "" });

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




    return <Container component="main" maxWidth="xs">

        <form onSubmit={handleFormSubmit}>
            <TextField id="outlined-basic" variant="outlined"
            type="text"
            name="username"
            placeholder="Nome de usuário"
            onChange={handleFormChange}

            />
            <TextField id="outlined-basic" variant="outlined"
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleFormChange}
            
            />
            <TextField id="outlined-basic" variant="outlined"
            type="password"
            name="password"
            placeholder="Senha"
            onChange={handleFormChange}

            />
            <Button variant="contained" type="submit" onClick={() => history.push("/signup")}>Cadastrar</Button>
        </form>

     




    </Container>
}
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { languages } from "../../languages";
import LanguageContext from "../../contexts/LanguageContext";

const SignupPage = () => {
  const history = useHistory();
  const selectedLanguage = useContext(LanguageContext);

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
    <div>
      <Helmet>
        <title>{languages[selectedLanguage].signupLabel}</title>
      </Helmet>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Nome de usuário"
          onChange={handleFormChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleFormChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handleFormChange}
        />
        <button>{languages[selectedLanguage].signupLabel}</button>
      </form>
    </div>
  );
};

export default SignupPage;
