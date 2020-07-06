import React from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  return (
    <div>
      Login<button onClick={() => history.push("/signup")}>Signup</button>
    </div>
  );
};

export default LoginPage;
