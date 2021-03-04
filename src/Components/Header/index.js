import React from "react";
import { Container } from "./styled";
import arrow from "./Imgs/back.svg";

const Header = (props) => {
  const arrowDisplay = props.arrow;
  return (
    <Container>
      <div id="arrow">
        {arrowDisplay ? <img src={arrow} alt="" /> : null}
      </div>
      <div id="title">
        <p>{props.title}</p>
      </div>
    </Container>
  );
};

export default Header;
