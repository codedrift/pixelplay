import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import SocketIoClient from "socket.io-client";
import App from "./App";
import "./index.css";
import { store, StoreContext } from "./redux";
import { updateFrame, updateConnectionStatus } from "./redux/modules/app/sagas";

export const socket = SocketIoClient("localhost:8080");

socket.on("connection", () => {
  console.log("connected");
  updateConnectionStatus("connected");
});

socket.on("message", (msg: any) => {
  console.log(msg);
  console.log("latency offset", Date.now() - msg.time, "ms")
  updateFrame(msg);
});

ReactDOM.render(
  <ReduxProvider store={store}>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </ReduxProvider>,
  document.getElementById("root")
);
