import React from "react";
import { FilterField, FilterText } from "./styled";

export const CategoryFilter = (props) => {
  return (
    <FilterField>
      <FilterText>
        <p>Burguer</p>
        <p>Asiática</p>
        <p>Massas</p>
        <p>Saudáveis</p>
        <p>Vegetariano</p>
        <p>Churrasco</p>
      </FilterText>
    </FilterField>
  );
};
