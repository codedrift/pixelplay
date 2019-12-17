import { Action } from "redux";

export interface Point {
  state: boolean;
  position: {
    x: number;
    y: number;
  };
}

export interface Frame {
  width: number;
  height: number;
  time: number;
  points: any[];
}
