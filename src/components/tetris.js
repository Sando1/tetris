import React, { useState } from "react";

//components
import Stage from "./stage";
import StartButton from "./startButton";
import Display from "./display";
import Control from "./control";
//styles
import { StyledTetrisWrapper } from "./styles/styledTetris";

import { Row, Col } from "react-bootstrap";
//hooks
import { useInterval } from "../hooks/useInterval";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useGameStatus } from "../hooks/useGameStatus";
//functions
import { createStage, checkCollision } from "../gameHelpers";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    // reset
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(1);
  };

  const drop = () => {
    // increase level on every ten rows
    if (rows > level * 10) {
      setLevel((prev) => prev + 1);
      // also increase speed
      setDropTime(1000 / level + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      //Game Over
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000 / level + 200);
      }
    }
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <Row className="justify-content-xs-center" noGutters>
        {gameOver ? (
          <Col xs={4} md={2}>
            <Display gameOver={gameOver} text="Game Over" />
          </Col>
        ) : (
          <>
            <Col xs={4} md={2}>
              <Display text={`Score: ${score}`} />
            </Col>
            <Col xs={4} md={2}>
              <Display text={`Level: ${level}`} />
            </Col>
            <Col xs={4} md={2}>
              <Display text={`Rows: ${rows}`} />
            </Col>
          </>
        )}
      </Row>

      <Row className="justify-content-xs-center" noGutters>
        <Col
          xs={12}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 6, offset: 3 }}
        >
          <Stage stage={stage} />
        </Col>
      </Row>
      <Row className="justify-content-xs-center" noGutters>
        <Col xs={{ span: 6, offset: 2 }}>
          <Row className="justify-content-xs-center" noGutters>
            <Col xs={{ span: 3, offset: 3 }}>
              <Control
                text="&uarr;"
                callback={() => {
                  playerRotate(stage, 1);
                }}
              />
            </Col>
          </Row>
          <Row className="justify-content-xs-center" noGutters>
            <Col xs={12}>
              <Control
                text="&larr;"
                callback={() => {
                  movePlayer(-1);
                }}
              />
              <Control text="&darr;" callback={dropPlayer} />
              <Control
                text="&rarr;"
                callback={() => {
                  movePlayer(1);
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          <StartButton callback={startGame} />
        </Col>
      </Row>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
