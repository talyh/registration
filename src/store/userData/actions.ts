import * as actionTypes from "./actionTypes";

export const userDataLoadStart = (
  userData: IUser
): actionTypes.UserDataActionTypes => ({
  type: actionTypes.USER_DATA_LOAD_START,
  payload: userData
});

export const userDataLoadSuccess = (
  userData: IUser
): actionTypes.UserDataActionTypes => ({
  type: actionTypes.USER_DATA_LOAD_SUCCESS,
  payload: userData
});

export const userDataLoadError = (
  error: Error
): actionTypes.UserDataActionTypes => ({
  type: actionTypes.USER_DATA_LOAD_ERROR,
  payload: error
});

export const userDataSaveStart = (): actionTypes.UserDataActionTypes => ({
  type: actionTypes.USER_DATA_SAVE_START
});

export const userDataSaveSuccess = (
  userData: IUser
): actionTypes.UserDataActionTypes => ({
  type: actionTypes.USER_DATA_SAVE_SUCCESS,
  payload: userData
});

export const userDataSaveError = (
  error: Error
): actionTypes.UserDataActionTypes => ({
  type: actionTypes.USER_DATA_SAVE_ERROR,
  payload: error
});
