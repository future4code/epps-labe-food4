import styled from "styled-components";

export const FilterField = styled.div`
  width: 100vw;
  max-width: 420px;
  padding: 12px 0 12px 8px;
  display: flex;
  flex-direction: wrap;
  align-items: center;
  margin-top: 5px;
  margin-right: 16px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    height: 4px;
    width: 4px;
    border: 1px solid transparent;
    @media (min-width: 421px) {
      border: 1px solid #5cb646;
    }
  }
`;

export const FilterText = styled.div`
  width: 100vw;
  max-width: 420px;
  height: 15px;
  display: flex;
  flex-direction: wrap;
`;

export const CategoryContainer = styled.p`
  margin-left: 18px;
  cursor: pointer;
  width: 87px;
  height: 18px;
  margin-left: 18px;
  margin-right: 18px;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
  &:hover,
  :active {
    color: #5cb646;
  }
`;
