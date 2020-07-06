import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";
import PostPage from "../PostPage";
import FeedPage from "../FeedPage";
import Header from "../Header";
import Footer from "../Footer";

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
