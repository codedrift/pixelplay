import { store } from "../..";
import { Frame } from "../../../model";
import { AppActionTypes } from "./actions";

export const updateFrame = (frame: Frame) => {
  store.dispatch({
    type: AppActionTypes.UPDATE_FRAME,
    frame
  });
};

export const updateConnectionStatus = (status: string) => {
	store.dispatch({
	  type: AppActionTypes.UPDATE_CONNECTION_STATUS,
	  status
	});
  };
