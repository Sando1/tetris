import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  align-items: center;
  margin: 15px 10px 10px 10px;
  padding: 7px;
  border: 2px solid #333;
  min-height: 20px;
  border-radius: 20px;
  color: ${(props) => (props.gameOver ? "red" : "#999")};
  background: #000;
  font-family: Pixel, Arial, sans-serif;
  font-size: 0.8rem;
  text-align: center;
`;
