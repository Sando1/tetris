import React from "react";
import Tetris from "./components/tetris";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Container className="App">
    <Tetris />
  </Container>
);

export default App;
