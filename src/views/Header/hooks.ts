import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppState } from "../../store";
import { signOutThunk } from "../../store/auth/thunks";

export const useStore = () => {
  const dispatch = useDispatch();

  const loading = useSelector(({ auth }: AppState) => auth.loading);
  const signOut = () => dispatch(signOutThunk());

  return {
    loading,
    signOut
  };
};

export const useRouter = (redirect: string) => {
  const history = useHistory();

  const authState = useSelector(({ auth }: AppState) => auth.state);

  const checkIfSignedOut = () => authState === "signedOut";
  const redirectAfterSignOut = () => {
    checkIfSignedOut() && history.push(redirect);
  };

  useEffect(redirectAfterSignOut);
};

export default useStore;
