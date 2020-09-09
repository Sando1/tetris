import React from "react";
import { StyledControl } from "./styles/styledControl";

const Control = ({ callback, text }) => (
  <StyledControl onClick={callback}>{text}</StyledControl>
);

export default Control;
