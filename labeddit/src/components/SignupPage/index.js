import React from "react";
import useForm from "../../hooks/useForm";
import { signup } from "../../functions/axios";
import { useHistory } from 'react-router-dom';




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


    return <div>

      

        <form onSubmit={handleFormSubmit}>
            <input
            type="text"
            name="nome"
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
            name="passsord"
            placeholder="Senha"
            onChange={handleFormChange}

            />
            <button onClick={() => history.push("/signup")}>Cadastrar</button>
        </form>

     




    </div>
}

export default SignupPage