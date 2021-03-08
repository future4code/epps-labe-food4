import React from "react";
import {
  HistoryCardDate,
  HistoryCardContainer,
  HistoryCardRestaurant,
  HistoryCardPrice,
} from "./styled";

const HistoryCard = (props) => {
  const date = new Date(props.date);
  let options = { day: "numeric", month: "long", year: "numeric" };
  const newDate = date.toLocaleDateString("pt-PT", options);
  const formatDate = newDate.split("de ");

  return (
    <HistoryCardContainer>
      <HistoryCardRestaurant>{props.restaurantName}</HistoryCardRestaurant>
      <HistoryCardDate>{formatDate}</HistoryCardDate>
      <HistoryCardPrice>
        SUBTOTAL R${props.totalPrice.toFixed(2)}
      </HistoryCardPrice>
    </HistoryCardContainer>
  );
};

export default HistoryCard;
