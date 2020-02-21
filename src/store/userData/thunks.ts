import { Dispatch } from "redux";
import { getSavedUserData, saveUserData } from "../../utils/";
import {
  userDataLoadStart,
  userDataLoadSuccess,
  userDataLoadError,
  userDataSaveStart,
  userDataSaveSuccess,
  userDataSaveError
} from "./actions";
import { User } from "../../typings/user";

export const loadUserDataThunk = (uid: string, user: User) => async (
  dispatch: Dispatch
) => {
  dispatch(userDataLoadStart(user));

  try {
    let userData: any = await getSavedUserData(uid);

    // create a record of the user if they don't have one
    if (!userData) {
      userData = {
        name: user.name,
        email: user.email,
        jamsAttended: [new Date().getFullYear()]
      };
      saveUserData(uid, userData);
    }

    if (!userData) {
      throw new Error("User not found");
    }
    return dispatch(userDataLoadSuccess(userData));
  } catch (error) {
    return dispatch(userDataLoadError(error));
  }
};

export const saveUserDataThunk = (uid: string, userData: User) => async (
  dispatch: Dispatch
) => {
  dispatch(userDataSaveStart());

  try {
    await saveUserData(uid, userData);

    return dispatch(userDataSaveSuccess(userData));
  } catch (error) {
    return dispatch(userDataSaveError(error));
  }
};

export default loadUserDataThunk;
