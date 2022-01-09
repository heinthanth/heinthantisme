import { combineReducers } from "redux";
import themeReducer, { ThemeState } from "./theme";

// prettier-ignore
export interface AppState { theme: ThemeState }
const AppReducer = combineReducers({ theme: themeReducer });

export default AppReducer;
