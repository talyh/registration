import { createContext } from "react";

export interface IAuthContext {
  uid: string;
  setUid: (arg0: string) => void;
  user: IUser | null;
  setUser: (arg0: IUser) => void | null;
}

export const AuthContext = createContext<IAuthContext | null>(null);
