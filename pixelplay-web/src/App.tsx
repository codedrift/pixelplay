import React from "react";
import styles from "./App.module.css";
import { FrameView } from "./FrameView";

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <FrameView />
    </div>
  );
};

export default App;
