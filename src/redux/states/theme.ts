import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";

export type ThemeOption = "dark" | "light";
// prettier-ignore
export interface ThemeState { value: ThemeOption }
// prettier-ignore
export interface ThemeAction extends AnyAction { type: string, payload: ThemeState }

export const OriginTheme: ThemeState = { value: "light" };
export const SET_THEME = "SET_THEME";

// prettier-ignore
const themeReducer = (state: ThemeState = OriginTheme,
    action: ThemeAction | AnyAction): ThemeState =>
  action.type === SET_THEME
    ? { value: action.payload?.value || OriginTheme.value }
    : action.type === HYDRATE // next-redux-wrapper
    ? { value: action.payload?.theme?.value || state.value } : state;

// prettier-ignore
export const setTheme = (theme: ThemeOption): ThemeAction =>
  ({ type: SET_THEME, payload: { value: theme } });

export default themeReducer;
