import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const MainContainer = styled.div`
  width: 100vw;
  max-width: 420px;
  box-sizing: border-box;
  display: flex;
  padding: 10px;
  gap: 2px;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => (props.greyBackground ? "#EEEEEE" : "#FFF")};
`;

export const BaseContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: space-between;
  align-items: center;
`;

export const Divisor = styled.hr`
  width: 100%;
  color: #000;
`;

export const Text = styled(Typography)`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`;
