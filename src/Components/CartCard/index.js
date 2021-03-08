import React from "react";
import {
  Card,
  CardContainer,
  ContentContainer,
  Img,
  MainContainer,
  QuantityCard,
  RemoveButton,
  TitleCard,
} from "./styled";

const CartCard = (props) => {
  return (
    <Card>
      <CardContainer>
        <div>
          <Img src={props.img} />
        </div>
        <ContentContainer>
          <div>
            <TitleCard>{props.title}</TitleCard>
            <QuantityCard>
              <p>{props.quantity}</p>
            </QuantityCard>
            <div>
              <p>{props.name}</p>
            </div>
          </div>
          <MainContainer>
            <p>{props.description}</p>
          </MainContainer>
          <div>
            <p>R${parseFloat(props.price).toFixed(2)}</p>
            <RemoveButton
              id="remove-btn"
              onClick={() => props.removeItem(props.id)}
            >
              remover
            </RemoveButton>
          </div>
        </ContentContainer>
      </CardContainer>
    </Card>
  );
};

export default CartCard;
