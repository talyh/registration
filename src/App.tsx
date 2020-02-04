import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import * as firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";

import { store } from "./store";
import Header from "./views/Header/Header";
import Home from "./views/Home";
import SignInPage from "./views/SignInPage";
import RegistrationForm from "./views/RegistrationForm";

const App = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signin">
            <SignInPage redirect="/registration" />
          </Route>
          <Route path="/registration/">
            <Header />
            <RegistrationForm />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
