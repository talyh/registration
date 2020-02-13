import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import { AppState } from "../store";
import { signInThunk, signOutThunk } from "../store/auth/thunks";

export const usePersistentAuth = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const uid = useSelector(({ auth }: AppState) => auth.uid);

  useEffect(() => {
    // TODO IMMEDIATE - though this works, it triggers the actions more than once, because it creates a mini-loop
    const getAuthState = () => {
      firebase.auth().onAuthStateChanged(user => {
        if (uid === "" && user !== null) {
          dispatch(signInThunk(undefined, user, history));
        } else if (uid !== "" && user === null) {
          dispatch(signOutThunk(history));
        }
      });
    };

    getAuthState();
    // TODO IMMEDIATE - Need to understand this syntax
    // return () => getAuthState();
  }, [dispatch, history, uid]);
};
