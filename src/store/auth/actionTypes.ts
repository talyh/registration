export const SIGN_IN_START = "AUTH/SIGN_IN_START";
export const SIGN_IN_SUCCESS = "AUTH/SIGN_IN_SUCCESS";
export const SIGN_IN_ERROR = "AUTH/SIGN_IN_ERROR";
export const SIGN_OUT_START = "AUTH/SIGN_OUT_START";
export const SIGN_OUT_SUCCESS = "AUTH/SIGN_OUT_SUCCESS";
export const SIGN_OUT_ERROR = "AUTH/SIGN_OUT_ERROR";

interface SignInStartAction {
  type: typeof SIGN_IN_START;
}

interface SignInSuccessAction {
  type: typeof SIGN_IN_SUCCESS;
  payload: string;
}

interface SignInErrorAction {
  type: typeof SIGN_IN_ERROR;
  payload: Error;
}

interface SignOutStartAction {
  type: typeof SIGN_OUT_START;
}

export interface SignOutSuccessAction {
  type: typeof SIGN_OUT_SUCCESS;
}

interface SignOutErrorAction {
  type: typeof SIGN_OUT_ERROR;
  payload: Error;
}

export type AuthActionTypes =
  | SignInStartAction
  | SignInSuccessAction
  | SignInErrorAction
  | SignOutStartAction
  | SignOutSuccessAction
  | SignOutErrorAction;
