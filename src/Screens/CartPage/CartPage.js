import React, { useContext, useEffect, useState } from "react";
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
  ShippingText,
  SubtotalPrice,
  TotalPrice,
  PaymentMethodText,
  CheckBox,
  Title,
} from "./styled";
import Buttons from "../../Components/Buttons";
import { getUserAdress, placeOrder } from "../../Services/user";
import GlobalStateContext from "../../GlobalState/GlobalStateContext";

export const CartPage = () => {
  const { states, setters } = useContext(GlobalStateContext);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [userAdress, setUserAdress] = useState(undefined);

  useEffect(() => {
    getUserAdress(setUserAdress);
  }, []);

  const onChangePay = (event) => {
    setPaymentMethod(event.target.value);
  };

  const sendOrder = () => {
    if (!paymentMethod) {
      alert("Selecione um método de pagamento.");
    } else if (Object.entries(states.cart).length !== 0) {
      const productsArray = states.cart.products
        .filter((item) => {
          return item.quantity > 0;
        })
        .map((product) => {
          return {
            id: product.id,
            quantity: product.quantity,
          };
        });

      const body = {
        products: productsArray,
        paymentMethod: paymentMethod,
      };
      placeOrder(body, states.cart.id);
    } else {
      alert("Escolha um produto!");
    }
  };

  const removeItemFromCart = (id) => {
    const newProducts = states.cart.products.map((product) => {
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
    const newCart = { ...states.cart, products: newProducts };
    setters.setCart(newCart);
  };

  const subTotal = () => {
    let number = 0;
    if (Object.entries(states.cart).length !== 0) {
      states.cart.products.forEach((item) => {
        number += item.price * item.quantity;
      });
      return states.cart.shipping + number;
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

      {Object.entries(states.cart).length !== 0 ? (
        states.cart.products.map((product) => {
          if (product.quantity > 0) {
            return (
              <CartCard
                id={product.id}
                quantity={product.quantity}
                img={product.photoUrl}
                name={product.name}
                description={product.description}
                price={product.price}
                removeItem={removeItemFromCart}
              />
            );
          }
        })
      ) : (
        <Title>Carrinho vazio</Title>
      )}

      <ShippingText>Frete R${states.cart.shipping}.00</ShippingText>
      <SubtotalPrice>
        <p>SUBTOTAL</p>
        <TotalPrice>R${subTotal()}.00</TotalPrice>
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
      <Buttons text="CONFIRMAR" onClick={sendOrder}></Buttons>
    </CartContainer>
  );
};
