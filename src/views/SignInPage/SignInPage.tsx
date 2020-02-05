import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useStore } from "./hooks";
import SignInButton from "../../components/formElements/buttons/SignInButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

interface ISignInPageProps {
  redirect: string; // TODO - This should probably be an enum
}

const SignInPage = ({ redirect }: ISignInPageProps) => {
  const { uid, loading, signIn } = useStore();

  // TODO - this should probably be a Util, especially considering token validation
  const checkIfAuthenticated = (uid: string): boolean => uid !== "";
  const redirectAfterSignIn = () => <Redirect to={redirect} />;
  const renderPage = () => (
    <SignInButton
      onClick={() => signIn(new firebase.auth.GoogleAuthProvider())}
      disabled={loading}
    >
      <FontAwesomeIcon icon={faGoogle} />
      Login with Google
    </SignInButton>
  );

  if (!checkIfAuthenticated(uid)) {
    return renderPage();
  } else {
    return redirectAfterSignIn();
  }
};

export default SignInPage;
