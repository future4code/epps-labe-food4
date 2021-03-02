import styled from 'styled-components'

export const ContainerBtn = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
`

export const Btn = styled.button`
  width: 328px;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  border: none;
  background-color: #5cb646;

  &:focus {
    outline: none;
    background-color: #66a557;
  }

  p {
    width: 296px;
    height: 18px;
    font-family:"Roboto";
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000000;
    margin: 0;
  }
`;
   
    