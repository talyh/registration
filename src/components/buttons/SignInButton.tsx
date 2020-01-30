import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { AuthContext, IAuthContext } from "../../AuthContext";

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

const checkIfNewUser = async (uid: string) => {
  // attempt to retrieve user record to determine if they've created a profile before
  // TODO - Find a way to abstract this so it's not repeated throughout
  const usersCollection = firebase.firestore().collection("Users");
  const docRef = usersCollection.doc(uid);
  const doc = await docRef.get();
  if (doc.exists) {
    return false;
  } else {
    return true;
  }
};

const saveNewUser = async (uid: string, userData: IUser) => {
  if (!uid || !userData) {
    throw new Error("Invalid user data");
  }

  // TODO - Find a way to abstract this so it's not repeated throughout
  const usersCollection = firebase.firestore().collection("Users");
  await usersCollection.doc(uid).set(userData);
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
      const userData: IUser = {
        name: user.displayName,
        email: user.email,
        jamsAttended: [new Date().getFullYear()]
      };

      // TODO - temporary till redux is connected
      setUid(uid);
      setUser(userData);

      // create a record of the user if they don't have one
      const isNewUser = await checkIfNewUser(user.uid);
      if (isNewUser) {
        saveNewUser(uid, userData);
      }

      // TODO - navigate to registration form
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
