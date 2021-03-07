import React, { useState, useContext } from "react";
import { Card } from "./styled";
import GlobalStateContext from "./../../GlobalState/GlobalStateContext";
import Popup from "./Popup";

const MenuItemCard = (props) => {
  const [quantity, setQuantity] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const { states, setters } = useContext(GlobalStateContext);

  const addItem = () => {
    quantity ? removeFromCart() : setOpenPopup(true);
  };

  const removeFromCart = () => {
    let cartArray = [...states.cart];
    let idx = cartArray
      .map((item) => {
        return item.id;
      })
      .indexOf(props.restaurantId);
    if (cartArray[idx].order.length == 1) {
      cartArray.splice(idx, 1);
      setters.setCart(cartArray);
    } else {
      const prodIdx = cartArray[idx].order
        .map((item) => {
          return item.id;
        })
        .indexOf(props.productId);
      cartArray[idx].order.splice(prodIdx, 1);
      setters.setCart(cartArray);
    }
    setQuantity(0);
  };

  const addToCart = (qtty) => {
    let cartArray = [...states.cart];
    let idx =
      cartArray.length > 0
        ? cartArray
            .map((item) => {
              return item.id;
            })
            .indexOf(props.restaurantId)
        : -1;

    if (idx < 0) {
      const orderInfo = {
        id: props.restaurantId,
        restaurant: props.name,
        address: props.address,
        deliveryTime: props.deliveryTime,
        shipping: props.shipping,
        order: [
          {
            id: props.productId,
            quantity: qtty,
            photoUrl: props.img,
            name: props.title,
            description: props.description,
            price: props.price,
          },
        ],
      };
      cartArray.push(orderInfo);
      setters.setCart(cartArray);
    } else {
      const orderInfo = {
        id: props.productId,
        quantity: qtty,
        photoUrl: props.img,
        name: props.title,
        description: props.description,
        price: props.price,
      };
      cartArray[idx].order.push(orderInfo);
      setters.setCart(cartArray);
    }
  };

  return (
    <>
      {openPopup && (
        <Popup setQuantity={setQuantity} setOpenPopup={setOpenPopup} addToCart={addToCart} />
      )}
      <Card quantity={quantity}>
        <div id="Rectangle">
          <div id="Image">
            <img src={props.img} />
          </div>
          <div id="Content">
            <div id="Header">
              <p id="Title">{props.title}</p>
              {quantity ? (
                <div id="Quantity">
                  <p>{quantity}</p>
                </div>
              ) : null}
            </div>
            <div id="Main">
              <p>{props.description}</p>
            </div>
            <div id="Footer">
              <p>R${props.price}</p>
              <button id="Btn" onClick={addItem}>
                {quantity ? "remover" : "adicionar"}{" "}
              </button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default MenuItemCard;
