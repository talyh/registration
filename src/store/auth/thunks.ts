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
    return result?.user;
  } else {
    throw new Error("Error signing in");
  }
};

export const signInThunk = (
  provider?: firebase.auth.AuthProvider,
  user?: firebase.User,
  history?: any
) => async (dispatch: Dispatch) => {
  try {
    dispatch(signInStart());

    let currentUser = user;

    if (!currentUser) {
      if (provider) {
        currentUser = await showSignInPopUp(provider);
      }

      if (!currentUser) {
        throw new Error("Invalid user");
      }
    }

    const uid: string = currentUser.uid;
    // QUESTION - WHYYYYY TS, WHYYYYYY?
    dispatch(
      loadUserDataThunk(uid, {
        name: currentUser.displayName || "",
        email: currentUser.email || ""
      }) as any
    );

    history.push("/registration"); // TODO IMMEDIATE - this shouldn't be hardcoded

    return dispatch(signInSuccess(uid));
  } catch (error) {
    return dispatch(signInError(error));
  }
};

export const signOutThunk = (history?: any) => async (dispatch: Dispatch) => {
  try {
    dispatch(signOutStart());

    await firebase.auth().signOut();

    history.push("/"); // TODO IMMEDIATE - this shouldn't be hardcoded

    return dispatch(signOutSuccess());
  } catch (error) {
    return dispatch(signOutError(error));
  }
};
