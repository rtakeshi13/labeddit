import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { login } from "../../functions/axios";
import { Helmet } from "react-helmet-async";

const LoginPage = () => {
  const history = useHistory();
  const [form, handleFormChange] = useForm({ email: "", password: "" });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await login(form);
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
        <title>Login</title>
      </Helmet>
      Login
      <form onSubmit={handleFormSubmit}>
        <input name="email" type="email" onChange={handleFormChange} required />
        <input
          name="password"
          type="password"
          onChange={handleFormChange}
          required
        />
        <button>Login</button>
      </form>
      <button onClick={() => history.push("/signup")}>Signup</button>
    </div>
  );
};

export default LoginPage;
