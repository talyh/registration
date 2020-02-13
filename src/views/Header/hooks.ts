import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store";
import { signOutThunk } from "../../store/auth/thunks";
import { useHistory } from "react-router-dom";

export const useStore = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loading = useSelector(({ auth }: AppState) => auth.loading);
  const signOut = () => dispatch(signOutThunk(history));

  return {
    loading,
    signOut
  };
};
