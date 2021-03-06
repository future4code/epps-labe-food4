import styled from "styled-components";

export const FilterField = styled.div`
  width: 360px;
  max-width: 360px;
  padding: 12px 0 12px 16px;
  display: flex;
  flex-direction: wrap;
  align-items: center;
  margin: 8px 0 0;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    height: 10px;
    width: 4px;
    border: 1px solid transparent;
  }
`;

export const FilterText = styled.div`
  width: 360px;
  max-width: 420px;
  height: 15px;
  display: flex;
  justify-content: flex-start;
  flex-direction: wrap;
  :first-child {
    /* margin-left: 18px; */
  }

  p {
    cursor: pointer;
    width: 87px;
    height: 18px;
    margin: 0 8px 0 0;
    padding: 0 0 12px 29px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;

    &:hover,
    :active {
      color: var(--mid-green);
    }
  }
`;
