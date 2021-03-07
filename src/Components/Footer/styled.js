import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 420px;
  height: 60px;
  margin: 13px 0 0;
  position: fixed;
  bottom: 0;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2),
    0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  transition: all 0.3s ease-in-out;

  .icon {
    width: 27px;
    height: 27px;

    margin: 11px;
    img {
      cursor: pointer;
      height: 100%;
      width: 100%;
    }
  }
`;
