import React, { useContext, useEffect, useState } from "react";
import CartCard from "../../Components/CartCard/index";
import {
  // Button,
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
  RestaurantContainer,
  RestaurantTitle,
  RestaurantAddress,
  RestaurantDelivery,
  ButtonContainer,
  Button,
  PaymentContainer,
} from "./styled";
import Buttons from "../../Components/Buttons";
import { getUserAddress, placeOrder } from "../../Services/user";
import GlobalStateContext from "../../Global/GlobalStateContext";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer/index";
import { useHistory } from "react-router";
import { deliveryText } from "./../../Global/Functions";

const CartPage = () => {
  const history = useHistory();
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
    } else if (states.cart.length > 0) {
      const productsArray = states.cart[0].order.map((item) => {
        return {
          id: item.id,
          quantity: item.quantity,
        };
      });

      const body = {
        products: productsArray,
        paymentMethod: paymentMethod,
      };
      placeOrder(body, states.cart.id, history);
    } else {
      alert("Escolha um produto!");
    }
  };

  const removeItemFromCart = (id) => {
    let cartArray = [...states.cart];
    if (cartArray[0].order.length > 1) {
      let idx = cartArray[0].order
        .map((item) => {
          return item.id;
        })
        .indexOf(id);
      cartArray[0].order.splice(idx, 1);
      setters.setCart(cartArray);
    } else {
      setters.setCart([]);
    }
  };

  const subTotal = () => {
    let number = 0;
    if (Object.entries(states.cart).length > 0) {
      states.cart[0].order.forEach((item) => {
        number += item.price * item.quantity;
      });
      return (states.cart[0].shipping + number).toFixed(2);
    }
    return 0;
  };

  const deliveryTime = deliveryText(states.cart[0]);
  return (
    <>
      <Header title="Carrinho" arrow="true" />
      <CartContainer>
        <AdressContainer>
          <AdressDelivery>Endereço de entrega</AdressDelivery>
          {userAddress ? (
            <p>{`${userAddress.street}, ${userAddress.number}`}</p>
          ) : (
            <p>Buscando endereço...</p>
          )}
        </AdressContainer>

        <RestaurantContainer>
          <RestaurantTitle>
            {states.cart.length > 0 && states.cart[0].restaurant}
          </RestaurantTitle>
          <RestaurantAddress>
            {states.cart.length > 0 && states.cart[0].address}
          </RestaurantAddress>
          <RestaurantDelivery>{deliveryTime} min</RestaurantDelivery>
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
                removeItem={removeItemFromCart}
              />
            );
          })
        ) : (
          <Title>Carrinho vazio</Title>
        )}

        <ShippingText>
          {" "}
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
        <ButtonContainer>
          <Button onClick={sendOrder}>CONFIRMAR</Button>
        </ButtonContainer>
      </CartContainer>
      <Footer/>
    </>
  );
};

export default CartPage;
