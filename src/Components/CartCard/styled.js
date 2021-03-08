import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  max-width: 420px;
  margin: 8px 0 0;
  padding: 8px 16px 0 0;
`;

export const CardContainer = styled.div`
  width: 328px;
  height: 112px;
  border-radius: 8px;
  border: 1px solid var(--greyish);
  display: flex;
`;

export const Img = styled.img`
  width: 96px;
  height: 112px;
  margin: 0 16px 0 0;
  object-fit: contain;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: content-box;
`;

export const TitleCard = styled.div`
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
`;

export const QuantityCard = styled.div`
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
`;

export const MainContainer = styled.div`
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
`;

export const RemoveButton = styled.button`
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
`;
