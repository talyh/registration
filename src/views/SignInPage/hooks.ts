import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppState } from "../../store";
import { signInThunk } from "../../store/auth/thunks";
import { auth } from "firebase";

export const useStore = (redirect: string) => {
  const dispatch = useDispatch();

  const loading = useSelector(({ auth }: AppState) => auth.loading);
  const signIn = (provider: firebase.auth.AuthProvider) =>
    dispatch(signInThunk(provider));

  return {
    loading,
    signIn
  };
};

export const useRouter = (redirect: string) => {
  const history = useHistory();

  const authState = useSelector(({ auth }: AppState) => auth.state);

  const checkIfSignedIn = () => authState === "signedIn";
  const redirectAfterSignIn = () => {
    checkIfSignedIn() && history.push(redirect);
  };

  useEffect(redirectAfterSignIn);
};

export default useStore;
