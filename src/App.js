import React from "react";
import GlobalState from "./GlobalState/GlobalState";
import Router from "./Routes/Router";
import styled from "styled-components";

const Bg = styled.div`
  width: 360px;
  min-height: 100vh;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: -1;
`;

function App() {
  return (
    <GlobalState>
      <Bg />
      <Router />
    </GlobalState>
  );
}

export default App;
