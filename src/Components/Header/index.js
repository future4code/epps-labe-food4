import React from "react";
import { Arrow, Container, Img, Title, TitleText } from "./styled";
import arrow from "../../Imgs/back.svg";
import { goToBack } from "./../../Routes/Coordinator";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();
  const arrowDisplay = props.arrow;
  return (
    <Container>
      <Arrow>
        {" "}
        {arrowDisplay ? (
          <Img src={arrow} alt="" onClick={() => goToBack(history)} />
        ) : null}
      </Arrow>
      <Title>
        <TitleText>{props.title}</TitleText>
      </Title>
    </Container>
  );
};

export default Header;
