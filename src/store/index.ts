import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./auth/reducer";
import userDataReducer from "./userData/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  userData: userDataReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type AppState = ReturnType<typeof rootReducer>;
