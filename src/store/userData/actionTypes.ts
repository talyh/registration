import { User } from "../../typings/user";

export const USER_DATA_LOAD_START = "USER_DATA/LOAD_START";
export const USER_DATA_LOAD_SUCCESS = "USER_DATA/LOAD_SUCCESS";
export const USER_DATA_LOAD_ERROR = "USER_DATA/LOAD_ERROR";
export const USER_DATA_SAVE_START = "USER_DATA/SAVE_START";
export const USER_DATA_SAVE_SUCCESS = "USER_DATA/SAVE_SUCCESS";
export const USER_DATA_SAVE_ERROR = "USER_DATA/SAVE_ERROR";

export interface UserDataLoadStart {
  type: typeof USER_DATA_LOAD_START;
  payload: User;
}

export interface UserDataLoadSuccess {
  type: typeof USER_DATA_LOAD_SUCCESS;
  payload: User;
}

export interface UserDataLoadError {
  type: typeof USER_DATA_LOAD_ERROR;
  payload: Error;
}

export interface UserDataSaveStart {
  type: typeof USER_DATA_SAVE_START;
}

export interface UserDataSaveSuccess {
  type: typeof USER_DATA_SAVE_SUCCESS;
  payload: User;
}

export interface UserDataSaveError {
  type: typeof USER_DATA_SAVE_ERROR;
  payload: Error;
}

export type UserDataActionTypes =
  | UserDataLoadStart
  | UserDataLoadSuccess
  | UserDataLoadError
  | UserDataSaveStart
  | UserDataSaveSuccess
  | UserDataSaveError;
