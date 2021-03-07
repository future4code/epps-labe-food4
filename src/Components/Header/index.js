import React from "react";
import { Container } from "./styled";
import arrow from "./Imgs/back.svg";
import { goToBack } from "./../../Routes/Coordinator";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();
  const arrowDisplay = props.arrow;
  return (
    <Container>
      <div id="arrow">
        {" "}
        {arrowDisplay ? (
          <img src={arrow} alt="" onClick={() => goToBack(history)} />
        ) : null}
      </div>
      <div id="title">
        <p>{props.title}</p>
      </div>
    </Container>
  );
};

export default Header;
