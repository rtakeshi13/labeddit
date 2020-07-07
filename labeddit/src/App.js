import React from "react";
import Router from "./routes";
import LanguageContext from "./contexts/LanguageContext";

const App = () => {
  const language = localStorage.getItem("language");
  return (
    <LanguageContext.Provider value={language || "pt"}>
      <Router />
    </LanguageContext.Provider>
  );
};

export default App;
