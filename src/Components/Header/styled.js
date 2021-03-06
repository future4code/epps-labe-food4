import styled from 'styled-components'

export const Container = styled.div`
position: sticky;
top: 0;
left: 0;
z-index: 2;

  width: 360px;
  height: 44px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  cursor: default;

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 var(--black-25);
  background-color: #ffffff;
  margin-top: 8px;

  #arrow {
    width: 23px;
    height: 24px;
    margin: 10px 54px 10px 16px;
    cursor: pointer;
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