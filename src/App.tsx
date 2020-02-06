import React from "react";
import { Provider } from "react-redux";
import * as firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";

import { store } from "./store";
import Router from "./router";

const App = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
