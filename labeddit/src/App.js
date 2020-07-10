import React, { useState } from "react";
import Router from "./routes";
import LanguageContext from "./contexts/LanguageContext";

const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem("language"));
  return (
    <LanguageContext.Provider value={[language || "pt", setLanguage]}>
      <Router />
    </LanguageContext.Provider>
  );
};

export default App;
