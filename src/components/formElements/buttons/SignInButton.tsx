import React, { useContext } from "react";
import styled from "styled-components";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useHistory } from "react-router-dom";
import { AuthContext, IAuthContext } from "../../../AuthContext";
import { saveUserData, getSavedUserData } from "../../../utils";

interface ISignInButtonProps {
  provider: firebase.auth.AuthProvider;
  children: React.ReactNode;
}

const showSignInPopUp = async (provider: firebase.auth.AuthProvider) => {
  const result: any = await firebase.auth().signInWithPopup(provider);

  // save token so we can skip login if jwt hasn't expired yet
  localStorage.setItem("userToken", result.credential.idToken);
  return result?.user;
};

const SignInButton = ({ children, provider }: ISignInButtonProps) => {
  const { setUid, setUser } = useContext(AuthContext) as IAuthContext;

  if (!provider) {
    throw new Error("Couldn't resolve provider");
  }

  let history = useHistory();

  const signIn = async (provider: firebase.auth.AuthProvider) => {
    try {
      const user = await showSignInPopUp(provider);

      if (!user) {
        throw new Error("Invalid user");
      }

      const uid: string = user.uid;
      let userData: IUser | undefined = await getSavedUserData(uid);

      // create a record of the user if they don't have one
      if (!userData) {
        userData = {
          name: user.displayName,
          email: user.email,
          jamsAttended: [new Date().getFullYear()]
        };
        saveUserData(uid, userData);
      }

      setUid(uid);
      setUser(userData);

      // navigate to registration form
      history.replace("/registration");
    } catch (error) {
      // TODO - Determine how to handle errors
      console.error(error);
    }
  };

  return <Button onClick={() => signIn(provider)}>{children}</Button>;
};

const Button = styled.button`
  font-size: 14px;
  color: white;
  background-color: #2569c0;
  padding: 5px;
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;

export default SignInButton;
