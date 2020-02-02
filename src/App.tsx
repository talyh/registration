import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";

import { SignInPage, RegistrationForm } from "./views";
import { AuthContext } from "./AuthContext";
import Header from "./components/Header";

const App = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const [uid, setUid] = useState<string>("");
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <AuthContext.Provider value={{ uid, setUid, user, setUser }}>
      <Router>
        <Switch>
          <Route exact path="/">
            {/* TODO - not true home*/}
            <SignInPage />
          </Route>
          <Route exact path="/signin">
            <SignInPage />
          </Route>
          <Route path="/registration/">
            <Header />
            <RegistrationForm />
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
