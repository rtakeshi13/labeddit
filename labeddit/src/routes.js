import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import PostPage from "./components/PostPage";
import FeedPage from "./components/FeedPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/feed">
          <FeedPage />
        </Route>
        <Route exact path="/post/:postId">
          <PostPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
