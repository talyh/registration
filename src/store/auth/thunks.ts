import { Dispatch } from "redux";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {
  signInStart,
  signInSuccess,
  signInError,
  signOutStart,
  signOutSuccess,
  signOutError
} from "./actions";
import { loadUserDataThunk } from "../userData/thunks";

const showSignInPopUp = async (provider: firebase.auth.AuthProvider) => {
  const result: any = await firebase.auth().signInWithPopup(provider);

  if (result?.user) {
    // save token so we can skip login if jwt hasn't expired yet
    await localStorage.setItem("userToken", result.credential.idToken);
    return result?.user;
  } else {
    throw new Error("Error signing in");
  }
};

export const signInThunk = (provider: firebase.auth.AuthProvider) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch(signInStart());
    const user = await showSignInPopUp(provider);

    if (!user) {
      throw new Error("Invalid user");
    }

    const uid: string = user.uid;
    // QUESTION - WHYYYYY TS, WHYYYYYY?
    dispatch(
      loadUserDataThunk(uid, { name: user.name, email: user.email }) as any
    );

    return dispatch(signInSuccess(uid));
  } catch (error) {
    return dispatch(signInError(error));
  }
};

export const signOutThunk = () => async (dispatch: Dispatch) => {
  try {
    dispatch(signOutStart());

    // clean local token and state
    await localStorage.removeItem("userToken");

    return dispatch(signOutSuccess());
  } catch (error) {
    return dispatch(signOutError(error));
  }
};
