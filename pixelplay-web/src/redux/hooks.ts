import { useCallback } from "react";
import { Store } from "redux";
import { create } from "redux-react-hook";
import { IAppAction, IAppState } from ".";

export const { StoreContext, useDispatch, useMappedState } = create<
	IAppState,
	IAppAction,
	Store<IAppState, IAppAction>
>();

const use = <T extends keyof IAppState>(key: T) => () =>
	useMappedState(useCallback(state => state[key], []));

export const useAppState = use("app");
