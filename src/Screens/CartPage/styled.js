import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RestaurantContainer = styled.div`
  p {
    font-family: "Roboto";
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
  }
  #rest-title {
    width: 328px;
    height: 18px;
    margin: 16px 16px 8px;
    color: var(--mid-green);
  }
  #rest-address, #rest-deliveryTime {
    width: 328px;
    height: 18px;
    margin: 8px 16px;
    color: var(--greyish);
  }
`;

export const CartContainer = styled.div`
  width: 360px;
  max-width: 420px;
  height: calc(100vh - 49px);
`;

export const AddressContainer = styled.div`
  width: 360px;
  max-width: 420px;
  height: 76px;
  margin: 1px 0 8px;
  padding: 16px;
  background-color: #eeeeee;
`;

export const AddressDelivery = styled.p`
  width: 360px;
  max-width: 420px;
  height: 18px;
  margin: 0 0 8px;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: var(--greyish);
`;

export const Title = styled.p`
  width: 360px;
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
  width: 360px;
  max-width: 420px;
  height: 18px;
  margin: 24px 16px 8px;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: var(--black-25);
`;

export const CheckBox = styled.div`
  margin: 10px 16px 0 16px;
  border-top: 0.5px solid black;
`;
