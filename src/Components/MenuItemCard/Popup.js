import React, { useState, useRef } from "react";
import { Wrapper } from "./styled";

const Popup = (props) => {
  const bgRef = useRef();
  let quantity = new Array(10);
  for (let i = 0; i < quantity.length; i++) {
    quantity[i] = i + 1;
  }

  const [qtty, setQtty] = useState(0);
  const addToCart = () => {
    props.setQuantity(qtty);
    props.setOpenPopup(false);
  };
  const closePopup = (e) => {
    if(bgRef.current === e.target){
      props.setOpenPopup(false);
    }
  }

  return (
    <Wrapper ref={bgRef} onClick={closePopup}>
      <div id="Box">
        <div id="Title">
          <p id="Title-text">Selecione a quantidade desejada</p>
        </div>

        <select value={qtty} onChange={(e) => setQtty(e.target.value)}>
          <option value="0"></option>
          {quantity.map((n) => {
            return (
              <option key={n} value={n}>
                {n}
              </option>
            );
          })}
        </select>
        <p id="Btn" onClick={addToCart}>
          ADICIONAR AO CARRINHO
        </p>
      </div>
    </Wrapper>
  );
};

export default Popup;
