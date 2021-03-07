import React from "react";
import { Info } from "./styled";
import Header from "../../Components/Header";

const RestaurantInfo = (props) => {
  return (
    <>
      <Header title="Restaurante" arrow="true" />
      <Info>
        <div id="image">
          <img src={props.logoUrl} alt="restaurant-logo" />
        </div>
        <div id="content">
          <p id="name">{props.name}</p>
          <p id="category">{props.category}</p>
          <div>
            <p id="delivery-time">{props.deliveryTime} min</p>
            <p id="shipping">Frete R${props.shipping}</p>
          </div>
          <p id="address">{props.address}</p>
        </div>
      </Info>
    </>
  );
};

export default RestaurantInfo;
