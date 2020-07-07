import React from "react";
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { path, component } = props;
  const history = useHistory();
  const isLoggedIn = Boolean(localStorage.getItem("labeddit"));

  !isLoggedIn && history.push("/login");
  return isLoggedIn ? <Route exact path={path} component={component} /> : null;
};

export default ProtectedRoute;
