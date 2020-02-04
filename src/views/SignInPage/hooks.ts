import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store";
import { signInThunk } from "../../store/auth/thunks";

export const useStore = () => {
  const dispatch = useDispatch();

  const uid = useSelector(({ auth }: AppState) => auth.uid);
  const loading = useSelector(({ auth }: AppState) => auth.loading);
  const signIn = (provider: firebase.auth.AuthProvider) =>
    dispatch(signInThunk(provider));

  return {
    uid,
    loading,
    signIn
  };
};

export default useStore;
