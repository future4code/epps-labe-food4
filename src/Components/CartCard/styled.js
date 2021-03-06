import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 360px;
  margin: 8px 0 0;
  padding: 8px 16px 0;
  #Rectangle {
    width: 328px;
    height: 112px;
    border-radius: 8px;
    border: 1px solid var(--greyish);
    display: flex;
  }
  #Image {
    width: 96px;
    height: 112px;
    margin: 0 16px 0 0;
    overflow: hidden;
    img {
      height: 100%;
      border-radius: 8px 0 0 8px;
      object-fit: contain;
      margin-left: -30px;
    }
  }
  #Content {
    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: content-box;
    #Header {
      #Title {
        width: 167px;
        height: 18px;
        margin: 18px 16px 0 0;
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: var(--mid-green);
      }
      #Quantity {
        width: 33px;
        height: 33px;
        margin: 0 0 11px 16px;
        padding: 7px 12px;
        border-radius: 0 8px 0 8px;
        border: 1px solid var(--mid-green);
        color: var(--mid-green);
        position: absolute;
        top: 0;
        right: 1px;
      }
    }
    #Main {
      width: 200px;
      height: 30px;
      margin: 8px 16px 4px 0;
      font-family: "Roboto";
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.29px;
      color: var(--greyish);
    }
    #Footer {
      #price {
        width: 118px;
        height: 19px;
        margin: 4px 8px 15px 0px;
        font-family: "Roboto";
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000000;
      }
      #remove-btn {
        width: 90px;
        height: 31px;
        margin: 7px 0 0 8px;
        padding: 8px 23px 9px 24px;
        border-radius: 8px 0 8px 0;
        border: 1px solid #e02020;
        background: transparent;
        color: #e02020;
        position: absolute;
        bottom: 0;
        right: 1px;
      }
    }
  }
`;