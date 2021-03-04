import styled from 'styled-components'

export const Container = styled.div`
  width: 360px;
  height: 44px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  #arrow {
    width: 23px;
    height: 24px;
    margin: 10px 54px 10px 16px;
    img {
      height: 100%;
      width: 100%;
    }
  }

  #title {
    width: 175px;
    height: 44px;
    /* margin: 20px 92px 0 54px; */
    padding: 13px 66px 12px;
    p {
      width: 43px;
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
    }
  }
`;