import { Frame } from "../../../model";
import { AppActions, AppActionTypes } from "./actions";

export interface AppState {
  frame: Frame;
  connection: string;
}

const intialState: AppState = {
  frame: {
	width: 0,
	height:0,
    points: [],
    time: 0
  },
  connection: "uninitalized"
};

export default (state: AppState = intialState, action: AppActions) => {
  switch (action.type) {
    case AppActionTypes.UPDATE_FRAME:
      return {
        ...state,
        frame: action.frame
      };
    case AppActionTypes.UPDATE_CONNECTION_STATUS:
      return {
        ...state,
        connection: action.status
      };
    default:
      return state;
  }
};
