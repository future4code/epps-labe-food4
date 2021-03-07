import React from "react";
import GlobalState from "./Global/GlobalState";
import Router from "./Routes/Router";
import { Bg, Wrapper } from "./Global/styled";

function App() {
  return (
    <GlobalState>
      <Bg />
      <Wrapper>
        <Router />
      </Wrapper>
    </GlobalState>
  );
}

export default App;
