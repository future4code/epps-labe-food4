import styled from "styled-components";

export const ResCard = styled.div`
  width: 100vw;
  max-width: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 196px;
  margin: 8px 0 0;
  padding: 8px 16px 0;

  #Rectangle {
    width: 329px;
    height: 188px;
    padding: 0 0 16px;
    border-radius: 8px;
    border: solid 1px var(--greyish);
    cursor: pointer;

    img {
      width: 328px;
      height: 120px;
      margin: 0 0 12px;
      object-fit: contain;
    }
  }

  #Restaurant {
    width: 296px;
    height: 18px;
    margin: 0 16px 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--mid-green);
  }
`;

export const Info = styled.div`
  display: flex;
  #Delivery-Time {
    width: 148px;
    height: 18px;
    margin: 4px 8px 0 16px;
    font-family: "Roboto";
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--greyish);
  }

  #Tax {
    width: 140px;
    height: 18px;
    margin: 4px 16px 0 8px;
    font-family: "Roboto";
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: var(--greyish);
  }
`;