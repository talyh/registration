import { useSelector, useDispatch } from "react-redux";
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

export default useStore;
