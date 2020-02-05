import * as actionTypes from "./actionTypes";

interface IAuthState {
  uid: string;
  loading: boolean;
  error: Error | null;
  state: "newSession" | "signedIn" | "signedOut";
}

export const initialState: IAuthState = {
  uid: "",
  loading: false,
  error: null,
  state: "newSession"
};

export const reducer = (
  state: IAuthState = initialState,
  action: actionTypes.AuthActionTypes
): IAuthState => {
  switch (action.type) {
    case actionTypes.SIGN_IN_START:
      return { ...state, loading: true, error: null };
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        uid: action.payload,
        loading: false,
        error: null,
        state: "signedIn"
      };
    case actionTypes.SIGN_IN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case actionTypes.SIGN_OUT_START:
      return { ...state, loading: true, error: null };
    case actionTypes.SIGN_OUT_SUCCESS:
      return {
        uid: "",
        loading: false,
        error: null,
        state: "signedOut"
      };
    case actionTypes.SIGN_OUT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
