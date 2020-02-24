import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store";
import { saveUserDataThunk } from "../../store/userData/thunks";
import { User } from "../../typings/User";

export const useStore = () => {
  const dispatch = useDispatch();

  const uid = useSelector(({ auth }: AppState) => auth.uid);
  const user = useSelector(({ userData }: AppState) => userData.user);
  const loading = useSelector(({ userData }: AppState) => userData.loading);
  const saving = useSelector(({ userData }: AppState) => userData.saving);
  const saveUser = (uid: string, user: User) =>
    dispatch(saveUserDataThunk(uid, user));

  return {
    uid,
    user,
    loading,
    saving,
    saveUser
  };
};
