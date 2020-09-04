import React from "react";

import Stage from "./stage";
import StartButton from "./startButton";
import Display from "./display";

import { createStage } from "../gameHelpers";

const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <Display text="Score" />
        <Display text="Level" />
        <Display text="Rows" />
        <StartButton />
      </aside>
    </div>
  );
};

export default Tetris;
