import React, { useState } from "react";
import { Card } from "./styled";
import Popup from "./Popup";

const CartCard = (props) => {
  const [quantity, setQuantity] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const addItem = () => {
    quantity ? setQuantity(0) : setOpenPopup(true);
  };

  return (
    <>
      {openPopup && (
        <Popup setQuantity={setQuantity} setOpenPopup={setOpenPopup} />
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
              <button id="Btn" onClick={addItem}>{quantity ? "remover" : "adicionar"} </button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CartCard;
