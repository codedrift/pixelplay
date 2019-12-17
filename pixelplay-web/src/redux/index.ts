import { combineReducers, createStore, Reducer, Store } from "redux";
import { appReducer } from "./modules";
import { AppActions } from "./modules/app/actions";
import { AppState } from "./modules/app/reducer";

export interface IAppState {
  app: AppState;
}

export type IAppAction = AppActions;

const createRootReducer = (): Reducer<IAppState, IAppAction> =>
  combineReducers<IAppState>({
    app: appReducer
  });

export const store: Store<IAppState, IAppAction> = createStore<
  IAppState,
  IAppAction,
  {},
  {}
>(createRootReducer());

export * from "./hooks";
export * from "./modules";

