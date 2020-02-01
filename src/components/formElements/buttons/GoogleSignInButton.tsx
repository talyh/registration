import React from "react";
import * as firebase from "firebase/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import SignInButton from "./SignInButton";

const GoogleSignInButton = () => {
  return (
    <SignInButton provider={new firebase.auth.GoogleAuthProvider()}>
      <FontAwesomeIcon icon={faGoogle} />
      Login with Google
    </SignInButton>
  );
};

export default GoogleSignInButton;
