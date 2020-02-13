import React from "react";
import styled from "styled-components";
import * as firebase from "firebase/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import SignInButton from "../../components/formElements/buttons/SignInButton";
import { useStore } from "./hooks";
import { usePersistentAuth } from "../../sharedHooks/";

const SignInPage = () => {
  usePersistentAuth(); // TODO IMMEDIATE - determine if this belongs here
  const { loading, signIn } = useStore();

  return (
    <SignInButton
      onClick={() => signIn(new firebase.auth.GoogleAuthProvider())}
      disabled={loading}
    >
      <FontAwesomeIcon icon={faGoogle} />
      Login with Google
    </SignInButton>
  );
};

export default SignInPage;
