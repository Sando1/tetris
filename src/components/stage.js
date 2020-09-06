import React from "react";

import Cell from "./cell";

import { StyledStage } from "./styles/styledStage";

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map((row) => row.map((cell, v) => <Cell key={v} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;
