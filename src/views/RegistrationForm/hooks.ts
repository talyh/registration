import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store";
import { saveUserDataThunk } from "../../store/userData/thunks";

export const useStore = () => {
  const dispatch = useDispatch();

  const uid = useSelector(({ auth }: AppState) => auth.uid);
  const user = useSelector(({ userData }: AppState) => userData.user);
  const loading = useSelector(({ userData }: AppState) => userData.loading);
  const saving = useSelector(({ userData }: AppState) => userData.saving);
  const saveUser = (uid: string, user: IUser) =>
    dispatch(saveUserDataThunk(uid, user));

  return {
    uid,
    user,
    loading,
    saving,
    saveUser
  };
};

export default useStore;
