import React from "react";

import Stage from "./stage";
import StartButton from "./startButton";
import Display from "./display";

import { createStage } from "../gameHelpers";
import { StyledTetris, StyledTetrisWrapper } from "./styles/styledTetris";

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <Display text="Score" />
          <Display text="Level" />
          <Display text="Rows" />
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
