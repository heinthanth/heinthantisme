import { Context, createWrapper } from "next-redux-wrapper";
import { createStore, Store } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension/lib/cjs/logOnlyInProduction";
import AppReducer, { AppState } from "./states";

const enhancer = devToolsEnhancer({});
const makeStore = (_context: Context) => createStore(AppReducer, enhancer);

export const ReduxWrapper = createWrapper<Store<AppState>>(makeStore);
