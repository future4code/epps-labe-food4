import React from "react";
import { Card } from "./styled";

const CartCard = (props) => {
  return (
    <Card>
      <div id="Rectangle">
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
            <button
              id="Btn"
              onClick={() => props.removeItem(props.id)}
            >
              remover
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartCard;
