import React from "react";
import { ResCard, Info } from "./styled";

const RestaurantsCard = (props) => {
  return (
    <ResCard>
      <div id="Rectangle">
        <div id="Image">
          <img src={props.img} alt='imagem do restaurante'/>
        </div>
        <p id="Restaurant">{props.restaurant}</p>
        <Info>
          <p id="Delivery-Time">{props.deliveryTime} min</p>
          <p id="Tax">Frete {props.tax}</p>
        </Info>
      </div>
    </ResCard>
  );
};

export default RestaurantsCard;
