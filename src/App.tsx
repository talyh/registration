import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";

import SignInPage from "./views/SignInPage/SignInPage";
import RegistrationForm from "./views/RegistrationForm/RegistrationForm";
import { AuthContext } from "./AuthContext";

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
            <SignInPage />;{/* TODO - not true home*/}
          </Route>
          <Route exact path="/signin">
            <SignInPage />
          </Route>
          <Route path="/registration/">
            <RegistrationForm />
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
