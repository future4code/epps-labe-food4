import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 120px;
  width: 100vw;
  max-width: 420px;
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
    border-radius: 8px 0 0 8px;
    overflow: hidden;
    img {
      height: 100%;
      margin-left: -50px;
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
        /* margin: 0 0 11px 16px; */
        margin: -1px;
        padding: 7px 12px;
        border-radius: 0 8px 0 8px;
        border: 1px solid var(--mid-green);
        color: var(--mid-green);

        position: absolute;
        top: 0;
        right: 0;
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
      #Price {
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

      #Btn {
        width: 90px;
        height: 31px;
        margin: -1px;
        border-radius: 8px 0 8px 0;
        border: 1px solid;
        border-color: #e02020;
        color: #e02020;
        background: transparent;

        position: absolute;
        bottom: 0;
        right: 0;
        outline: none;
        cursor: pointer;
      }
    }
  }
`;
