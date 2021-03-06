import * as actionTypes from "./actionTypes";
import { User } from "../../typings/User";

export const userDataLoadStart = (): actionTypes.UserDataActionTypes => ({
  type: actionTypes.USER_DATA_LOAD_START
});

export const userDataLoadSuccess = (
  userData: User
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
  userData: User
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
