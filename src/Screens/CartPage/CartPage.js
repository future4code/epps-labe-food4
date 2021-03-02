import axios from "axios";
import React, { useEffect, useState } from "react";
import CartCard from "../../Components/CartCard/index";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import {
  AdressDelivery,
  AdressContainer,
  CartContainer,
  Title,
  ShippingText,
  SubtotalPrice,
  TotalPrice,
  PaymentMethodText,
  DivBorder,
  CheckBox,
} from "./styled";

export const CartPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [userAdress, setUserAdress] = useState(undefined);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getUserAdress(setUserAdress);
  }, []);

  const onChangePay = (event) => {
    setPaymentMethod(event.target.value);
  };

  const getUserAdress = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile/adress",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setUserAdress(response.data.adress);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const removeItem = (id) => {
    const newProducts = cart.products.map((product) => {
      if (product.id === id) {
        const newQuantity = product.quantity - 1;
        const completeProduct = {
          ...product,
          quantity: newQuantity,
        };
        return completeProduct;
      } else {
        return product;
      }
    });
    const newCart = { ...cart, products: newProducts };
    setCart(newCart);
  };

  const subTotal = () => {
    let number = 0;
    if (Object.entries(cart).length !== 0) {
      cart.products.forEach((item) => {
        number += item.price * item.quantity;
      });
      return cart.shipping + number;
    }
    return 0;
  };

  return (
    <CartContainer>
      <AdressContainer>
        <AdressDelivery>Endereço de entrega</AdressDelivery>
        {userAdress ? (
          <p>{`${userAdress.street}, ${userAdress.number}`}</p>
        ) : (
          <p>Buscando endereço...</p>
        )}
      </AdressContainer>

      {Object.entries(cart).length !== 0 ? (
        cart.products.map((product) => {
          if (product.quantity > 0) {
            return <CartCard />;
          }
        })
      ) : (
        <Title>Carrinho vazio</Title>
      )}

      <ShippingText>Frete R$</ShippingText>
      <SubtotalPrice>
        <p>SUBTOTAL</p>
        <TotalPrice>R${subTotal()}</TotalPrice>
      </SubtotalPrice>

      <PaymentMethodText>Forma de pagamento</PaymentMethodText>
      <CheckBox>
        <FormControl component="fieldset" required={true}>
          <RadioGroup
            name="paymentMethod"
            value={paymentMethod}
            onChange={onChangePay}
          >
            <FormControlLabel
              value="money"
              control={<Radio color="var(--mid-green)" />}
              label="Dinheiro"
            />
            <FormControlLabel
              value="creditcard"
              control={<Radio color="var(--mid-green)" />}
              label="Cartão de crédito"
            />
          </RadioGroup>
        </FormControl>
      </CheckBox>
    </CartContainer>
  );
};
