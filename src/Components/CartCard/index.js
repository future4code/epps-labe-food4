import React from "react";
import { Card } from "./styled";

const CartCard = (props) => {
  return (
    <Card>
      <div id="Retangle">
        <div id="Image">
          <img src={props.img} />
        </div>
        <div id="Content">
          <div id="Header">
            <p id="Title">{props.title}</p>
            <div id="Quantity">
              <p>{props.quantity}</p>
            </div>
          </div>
          <div id="Main">
            <p>{props.description}</p>
          </div>
          <div id="Footer">
            <p>R${props.price}</p>
            <button id="remove-btn">remover</button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartCard;
