import * as actionTypes from "./actionTypes";

export const signInStart = (): actionTypes.AuthActionTypes => ({
  type: actionTypes.SIGN_IN_START
});

export const signInSuccess = (uid: string): actionTypes.AuthActionTypes => {
  return {
    type: actionTypes.SIGN_IN_SUCCESS,
    payload: uid
  };
}; // TODO - DISPATCH USER DATA LOAD
// TODO - Add control on form to wait for userData to exist

export const signInError = (error: Error): actionTypes.AuthActionTypes => ({
  type: actionTypes.SIGN_IN_ERROR,
  payload: error
});

export const signOutStart = (): actionTypes.AuthActionTypes => ({
  type: actionTypes.SIGN_OUT_START
});

export const signOutSuccess = (): actionTypes.AuthActionTypes => ({
  type: actionTypes.SIGN_OUT_SUCCESS
});

export const signOutError = (error: Error): actionTypes.AuthActionTypes => ({
  type: actionTypes.SIGN_OUT_ERROR,
  payload: error
});
