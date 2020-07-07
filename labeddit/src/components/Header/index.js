import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <div>
      Header
      <button
        onClick={() => {
          localStorage.removeItem("labeddit");
          history.push("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
