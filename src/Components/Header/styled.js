import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  max-width: 420px;
  height: 44px;

  display: grid;
  grid-template-columns: 30px 1fr 30px;
  align-items: center;
  cursor: default;
  box-shadow: 0 0.5px 0 0 var(--black-25);
  background-color: #ffffff;
  margin: 8px 0;
`;

export const Arrow = styled.div`
  width: 23px;
  height: 24px;
  margin: 10px 54px 10px 16px;
  cursor: pointer;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
`;

export const Title = styled.div`
  width: 100%;
  height: 44px;
  padding: 13px 66px 12px;
`;
export const TitleText = styled.p`
  height: 19px;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`;
