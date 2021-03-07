import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100vw;
  max-width: 420px;
  margin-bottom: 70px;
`;

export const AdressContainer = styled.div`
  width: 100%;
  height: 76px;
  padding: 16px;
  background-color: #eeeeee;
`;

export const AdressDelivery = styled.p`
  width: 100%;
  height: 18px;
  margin: 0 0 8px;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: var(--greyish);
`;

export const Title = styled.p`
  width: 100vw;
  max-width: 420px;
  height: 42px;
  margin: 18px 0 33px;
  padding: 12px 32px;
  font-size: 16px;
  text-align: center;
`;

export const ShippingText = styled.p`
  font-size: 16px;
  text-align: right;
  margin: 16px 16px 13px 60px;
`;

export const SubtotalPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 16px 0 16px;
`;

export const TotalPrice = styled.p`
  color: var(--mid-green);
  font-weight: bold;
  font-size: 18px;
  letter-spacing: -0.43px;
`;

export const PaymentMethodText = styled.p`
  width: 100vw;
  max-width: 420px;
  height: 18px;
  margin: 24px 0 0 16px;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: var(--black-25);
`;

export const CheckBox = styled.div`
  margin: 10px 16px 0 16px;
  border-top: 0.5px solid black;
`;

export const RestaurantContainer = styled.div`
  margin: 16px 16px 8px;
`;

export const RestaurantTitle = styled.p`
  color: var(--mid-green);
`;

export const RestaurantAddress = styled.p`
  color: var(--greyish);
`;

export const RestaurantDelivery = styled.p`
  color: var(--greyish);
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 8px 0 15px 0;
  position: relative;
  border: 2px solid #5cb646;
  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  outline: none;
  width: 90vw;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: #5cb646;
  z-index: 1;
  overflow: hidden;
  &:hover:before {
    left: 0%;
    right: auto;
    width: 100%;
  }
  &:before {
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 0px;
    z-index: -1;
    content: "";
    background: #44c933;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  }
`;

export const ButtonContainer = styled.div`
  width: 100vw;
  max-width: 420px;
  height: 42px;
  margin: 16px 0 16px;
  padding: 0 16px;
`;
