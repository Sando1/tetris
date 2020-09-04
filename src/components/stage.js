import React from "react";

import Cell from "./cell";

const Stage = ({ stage }) => (
  <div>
    {stage.map((row) => row.map((cell, v) => <Cell key={v} type={cell[0]} />))}
  </div>
);

export default Stage;
