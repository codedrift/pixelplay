import { Action } from "redux";
import { Frame } from "../../../model";

export enum AppActionTypes {
  UPDATE_FRAME = "app:update_frame",
  UPDATE_CONNECTION_STATUS = "app:update_connection_status"
}

export interface UpdateFrameAction extends Action<AppActionTypes.UPDATE_FRAME> {
  frame: Frame;
}

export interface UpdateConnectionStatusAction
  extends Action<AppActionTypes.UPDATE_CONNECTION_STATUS> {
  status: string;
}

export type AppActions = UpdateFrameAction | UpdateConnectionStatusAction;
