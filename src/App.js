import React from "react";
import GlobalState from "./Global/GlobalState";
import Router from "./Routes/Router";
import { Bg, Wrapper } from "./Global/styled";
import Footer from "./Components/Footer";

function App() {
  let path = window.location.pathname;
  let visible = true;
  if (path === "/" || path === "/register") {
    visible = false;
  }
  return (
    <GlobalState>
      <Bg />
      <Wrapper>
        <Router />
        {/* {visible ? <Footer /> : null} */}
      </Wrapper>
    </GlobalState>
  );
}

export default App;
