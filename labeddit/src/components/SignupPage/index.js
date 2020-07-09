import React, { useContext } from "react";
import useForm from "../../hooks/useForm";
import { signup } from "../../functions/axios";
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
