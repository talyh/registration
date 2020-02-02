import React, { useContext } from "react";
import styled from "styled-components";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useHistory } from "react-router-dom";
import { AuthContext, IAuthContext } from "../../../AuthContext";
import { saveUserData, getSavedUserData } from "../../../utils";
import colors from "../../../colors";

interface ISignInButtonProps {
  provider: firebase.auth.AuthProvider;
  children: React.ReactNode;
}

const showSignInPopUp = async (provider: firebase.auth.AuthProvider) => {
  const result: any = await firebase.auth().signInWithPopup(provider);

  // save token so we can skip login if jwt hasn't expired yet
  await localStorage.setItem("userToken", result.credential.idToken);
  return result?.user;
};

const SignInButton = ({ children, provider }: ISignInButtonProps) => {
  const { setUid, setUser } = useContext(AuthContext) as IAuthContext;

  if (!provider) {
    throw new Error("Couldn't resolve provider");
  }

  const history = useHistory();

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
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: ${colors.button.normal.text};
  background-color: ${colors.button.normal.background};
  padding: 5px;
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  outline: none;

  :hover {
    box-shadow: ${colors.button.normal.hover.boxShadowOutset} 0px 0px 5px,
      inset ${colors.button.normal.hover.boxShadowInset} 0px -1px 5px;
    color: ${colors.button.normal.hover.text};
  }

  :disabled {
    background-color: ${colors.button.normal.disabled.background};
    color: ${colors.button.normal.disabled.text};
  }
`;

export default SignInButton;
