import React from "react";
import { ResCard, Info } from "./styled";

const RestaurantsCard = (props) => {
  return (
    <ResCard onClick={props.onClick}>
      <div id="Rectangle">
        <div id="Image" bg={props.img}>
          <img id="card-img" src={props.img} alt="imagem do restaurante" />
        </div>
        <p id="Restaurant">{props.restaurant}</p>
        <Info>
          <p id="Delivery-Time">{props.deliveryTime}</p>
          <p id="Tax">Frete R${props.tax}</p>
        </Info>
      </div>
    </ResCard>
  );
};

export default RestaurantsCard;
