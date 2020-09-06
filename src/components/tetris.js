import React, { useState } from "react";

//components
import Stage from "./stage";
import StartButton from "./startButton";
import Display from "./display";
//styles
import { StyledTetris, StyledTetrisWrapper } from "./styles/styledTetris";
//hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <>
              <Display text="Score" />
              <Display text="Level" />
              <Display text="Rows" />
            </>
          )}
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
