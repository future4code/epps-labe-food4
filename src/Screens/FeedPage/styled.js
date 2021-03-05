import styled from "styled-components";

export const FeedPageContainer = styled.div`
  width: 100vw;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 170px;
`;

export const ContainerCardFeed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OrderBar = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  position: fixed;
  bottom: 45px;
  width: 100vw;
  max-width: 420px;
  height: 118px;
  padding: 24px;
  background-color: var(--mid-green);
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin-left: 25px;
`;

export const TextOrder = styled.p`
  color: white;
  margin-bottom: 8px;
`;

export const SubTotalText = styled.p`
  height: 18px;
  margin: 7px 0 0;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.39px;
  color: var(--black-25);
`;
