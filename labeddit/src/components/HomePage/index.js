import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  history.push("/login");
  return <div>Home</div>;
};

export default HomePage;
