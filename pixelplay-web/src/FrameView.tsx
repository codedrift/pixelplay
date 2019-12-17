import React from "react";
import { Layer, Rect, Stage } from "react-konva";
import styles from "./FrameView.module.css";
import { useAppState } from "./redux";


export const FrameView: React.FC = () => {
  const { frame } = useAppState();
  const maxHeight = window.innerHeight / frame.height
  const maxWidth = window.innerWidth / frame.width

  // Adjust to window
  const pixelSize = Math.round(Math.min(maxHeight, maxWidth));

  return (
    <div className={styles.root}>
      <div className={styles.canvasWrapper}>
        <Stage
          width={frame.width * pixelSize}
          height={frame.height * pixelSize}
        >
          <Layer>
            {frame.points.map(({ position: { x, y }, state }: any) => {
              return (
                <Rect
                  key={`${x}_${y}`}
                  x={x * pixelSize}
                  y={y * pixelSize}
                  width={pixelSize}
                  height={pixelSize}
                  fill={state ? "#e0e0e0" : "#111111"}
                />
              );
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};
