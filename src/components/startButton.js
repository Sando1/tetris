import React from "react";
import { StyledButton } from "./styles/styledButton";

const StartButton = ({ callback }) => (
  <StyledButton onclick={callback}>Start Game</StyledButton>
);

export default StartButton;
