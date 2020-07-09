import React, { useContext } from "react";
import useForm from "../../hooks/useForm";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { signup } from "../../functions/axios";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { languages } from "../../languages";
import LanguageContext from "../../contexts/LanguageContext";
import TextField from "@material-ui/core/TextField";

const SignupPage = () => {
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
      <form onSubmit={handleFormSubmit}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          name="username"
          placeholder={languages[selectedLanguage].usernameLabel}
          onChange={handleFormChange}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="email"
          name="email"
          placeholder={languages[selectedLanguage].emailLabel}
          onChange={handleFormChange}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="password"
          name="password"
          placeholder={languages[selectedLanguage].passwordLabel}
          onChange={handleFormChange}
        />
        <Button variant="contained">
          {languages[selectedLanguage].signupLabel}
        </Button>
      </form>
    </Container>
  );
};

export default SignupPage;
