import React from "react";
import styled from "styled-components";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useStore, useRouter } from "./hooks";
import SignInButton from "../../components/formElements/buttons/SignInButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

interface ISignInPageProps {
  redirect: string; // TODO - This should probably be an enum
}

const SignInPage = ({ redirect }: ISignInPageProps) => {
  const { loading, signIn } = useStore(redirect);
  useRouter(redirect);

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
