import React from "react";
import { ResCard, Info } from "./styled";
import img from "./img/image.png";

const RestaurntsCard = () => {
  return (
    <ResCard>
      <div id="Rectangle">
        <div id="Image">
          <img src={img} />
        </div>
        <p id="Restaurante">Vinil Butantã</p>
        <Info>
        <p id="Tempo-de-entrega">50 - 60 min</p>
        <p id="Taxa-de-entrega">Frete R$6,00</p>
        </Info>
      </div>
      
    </ResCard>
  );
};

export default RestaurntsCard;
