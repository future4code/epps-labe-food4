import React from "react";
import { Info } from "./styled";

const RestaurantInfo = (props) => {
  return (
    <>
      <Info>
        <div id="image">
          <img src={props.logoUrl} alt="restaurant-logo" />
        </div>
        <div id="content">
          <p id="name">{props.name}</p>
          <p id="category">{props.category}</p>
          <div>
            <p id="delivery-time">{props.deliveryTime}</p>
            <p id="shipping">Frete R${props.shipping}</p>
          </div>
          <p id="address">{props.address}</p>
        </div>
      </Info>
    </>
  );
};

export default RestaurantInfo;
