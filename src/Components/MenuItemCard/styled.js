import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 120px;
  width: 360px;
  margin: 8px 0 0;
  padding: 8px 16px 0;
  cursor: default;

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
        margin: 7px 0 0 8px;
        border-radius: 8px 0 8px 0;
        border: 1px solid;
        border-color: ${(props) =>
          props.quantity ? "#e02020" : "var(--mid-green)"};
        color: ${(props) => (props.quantity ? "#e02020" : "var(--mid-green)")};
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

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 100vh;
  min-width: 360px;
  background-color: rgba(0, 0, 0, 0.5);

  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  #Box {

    width: 328px;
    height: 216px;
    margin: 27px 16px 29px;
    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #Title {
      width: 360px;
      height: 42px;
      margin: 31px 0 0;
      padding: 6px 32px 12px 16px;
      #Title-text {
        width: 296px;
        height: 18px;
        margin: 6px 0 0 16px;
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

    select {
      width: 296px;
      height: 56px;
      margin: 19px 16px 0;
      padding: 16px;
      border-radius: 4px;
      border: solid 1px var(--greyish);

      background: url("http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png")
        no-repeat right transparent;
      appearance: none;
      background-position-x: 264px;
      outline: none;

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
      width: 183px;
      height: 19px;
      margin: 28px 16px 16px 33px;
      font-family: "Roboto";
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.39px;
      text-align: right;
      align-self: flex-end;
      color: var(--mid-green);
      cursor: pointer;
    }
  }
`;