import styled from "styled-components";

export const ResCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:360px;
  height:196px;
  margin:8px 0 0;
  padding:8px 16px 0;

  #Rectangle {
    width: 329px;
    height: 188px;
    padding: 0 0 16px;
    border-radius: 8px;
    border: solid 1px var(--greyish);
  }

  #Restaurant {
    width: 296px;
    height: 18px;
    margin: 12px 16px 0;
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
  #Delivery {
    width: 148px;
    height: 18px;
    margin: 4px 8px 0 16px;
    font-family: Roboto;
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
    font-family: Roboto;
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
