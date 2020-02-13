import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../views/Header/Header";
import Home from "../views/Home";
import SignInPage from "../views/SignInPage";
import RegistrationForm from "../views/RegistrationForm";
import routes from "./routes";

const CustomRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.home}>
          <Home />
        </Route>
        <Route exact path={routes.signIn}>
          <SignInPage />
        </Route>
        <Route path={routes.registration}>
          <Header />
          <RegistrationForm />
        </Route>
      </Switch>
    </Router>
  );
};

export default CustomRouter;
