import React from "react";
import Router from "./routes";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  );
}

export default App;
