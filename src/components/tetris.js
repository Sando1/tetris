import React from "react";

import Stage from "./stage";
import StartButton from "./startButton";
import Display from "./display";

const Tetris = () => {
  return (
    <div>
      <Stage />
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
