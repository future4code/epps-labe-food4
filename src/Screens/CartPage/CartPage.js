import React, { useContext, useEffect, useState } from "react";
import CartCard from "../../Components/CartCard/index";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import {
  Wrapper,
  AddressDelivery,
  AddressContainer,
  RestaurantContainer,
  CartContainer,
  ShippingText,
  SubtotalPrice,
  TotalPrice,
  PaymentMethodText,
  CheckBox,
  Title,
} from "./styled";
import Buttons from "../../Components/Buttons";
import Footer from "../../Components/Footer/index";
import { getUserAddress, placeOrder } from "../../Services/user";
import GlobalStateContext from "../../GlobalState/GlobalStateContext";

export const CartPage = () => {
  const { states, setters } = useContext(GlobalStateContext);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [userAddress, setUserAddress] = useState(undefined);

  useEffect(() => {
    getUserAddress(setUserAddress);
  }, []);

  const onChangePay = (event) => {
    setPaymentMethod(event.target.value);
  };

  const sendOrder = () => {
    if (!paymentMethod) {
      alert("Selecione um método de pagamento.");
    }
    else if (states.cart.length > 0) {
      const productsArray = states.cart[0].order.map((item) => {
        return { id: item.id, quantity: item.quantity };
      });
      // .map((product) => {
      //   return {
      //     id: product.id,
      //     quantity: product.quantity,
      //   };
      // });

      const body = {
        products: productsArray,
        paymentMethod: paymentMethod,
      };
      console.log(body);
      // placeOrder(body, states.cart.id);
    } else {
      alert("Escolha um produto!");
    }
  };

  const teste = () => {
    if (!paymentMethod) {
      alert("Selecione um método de pagamento.");
    }
  }

  const removeItemFromCart = (id) => {
    const newProducts = states.cart[0].order.map((product) => {
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
    if (Object.entries(states.cart).length > 0) {
      states.cart[0].order.forEach((item) => {
        number += item.price * item.quantity;
      });
      return (states.cart[0].shipping + number).toFixed(2);
    }
  };

  console.log(states.cart)

  return (
    <Wrapper>
      <CartContainer>
        <AddressContainer>
          <AddressDelivery>Endereço de entrega</AddressDelivery>
          {userAddress ? (
            <p>{`${userAddress.street}, ${userAddress.number}`}</p>
          ) : (
            <p>Buscando endereço...</p>
          )}
        </AddressContainer>

        <RestaurantContainer>
          <p id="rest-title">
            {states.cart.length > 0 && states.cart[0].restaurant}
          </p>
          <p id="rest-address">
            {states.cart.length > 0 && states.cart[0].address}
          </p>
          <p id="rest-deliveryTime">
            {states.cart.length > 0 && states.cart[0].deliveryTime}
          </p>
        </RestaurantContainer>

        {states.cart.length > 0 ? (
          states.cart[0].order.map((product) => {
            return (
              <CartCard
                id={product.id}
                quantity={product.quantity}
                img={product.photoUrl}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            );
          })
        ) : (
          <Title>Carrinho vazio</Title>
        )}

        <ShippingText>
          Frete R${states.cart.length > 0 && states.cart[0].shipping.toFixed(2)}
        </ShippingText>
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
        <Buttons text="CONFIRMAR" onClick={teste}></Buttons>
      </CartContainer>
      <Footer />
    </Wrapper>
  );
};
