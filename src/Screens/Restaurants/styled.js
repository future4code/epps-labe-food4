import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  cursor: default;

  #menu-section {
    hr {
      background-color: #000000;
      height: 1px;
      border: none;
      margin: 8px 16px -8px;
    }
    #menu-category {
      width: 328px;
      height: 18px;
      margin: 16px 16px 8px;
      font-family: "Roboto";
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.39px;
      color: #000000;
      margin-top: 16px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  #image {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 328px;
    height: 120px;
    margin: 17px 16px 12px;
    img {
      height: 100%;
    }
  }
  #content {
    p {
      height: 18px;
      font-family: "Roboto";
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.39px;
    }
    #name {
      width: 328px;
      margin: 12px 16px 0;
      color: var(--mid-green);
    }
    #category {
      width: 104px;
      margin: 8px 8px 0px 16px;
      color: var(--greyish);
    }
    > div {
      display: flex;
      #delivery-time {
        width: 104px;
        margin: 8px 8px 0px 16px;
        color: var(--greyish);
      }
      #shipping {
        width: 104px;
        margin: 8px 128px 0px 8px;
        color: var(--greyish);
      }
    }
    #address {
      width: 328px;
      margin: 10px 16px 16px;
      color: var(--greyish);
    }
  }
`;
