import * as actionTypes from "./actionTypes";
import { SignOutSuccessAction, SIGN_OUT_SUCCESS } from "../auth/actionTypes";
import { User } from "../../typings/User";

interface IUserDataState {
  user: User | null;
  loading: boolean;
  saving: boolean;
  error: Error | null;
}

export const initialState: IUserDataState = {
  user: null,
  loading: false,
  saving: false,
  error: null
};

export const reducer = (
  state: IUserDataState = initialState,
  action: actionTypes.UserDataActionTypes | SignOutSuccessAction
): IUserDataState => {
  switch (action.type) {
    case actionTypes.USER_DATA_LOAD_START:
      return { ...state, loading: true, error: null };
    case actionTypes.USER_DATA_LOAD_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null
      };
    case actionTypes.USER_DATA_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case actionTypes.USER_DATA_SAVE_START:
      return { ...state, saving: true, error: null };
    case actionTypes.USER_DATA_SAVE_SUCCESS:
      return {
        user: action.payload,
        loading: false,
        saving: false,
        error: null
      };
    case actionTypes.USER_DATA_SAVE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case SIGN_OUT_SUCCESS:
      return {
        user: null,
        loading: false,
        saving: false,
        error: null
      };
    default:
      return state;
  }
};

export default reducer;
