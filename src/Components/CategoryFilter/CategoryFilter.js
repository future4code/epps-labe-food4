import React from "react";
import { FilterField, FilterText } from "./styled";

export const CategoryFilter = (props) => {
  const restaurants = props.restaurants
  
  const categoryList = restaurants && restaurants.map((res) =>{
    return res.category
  })
  
  let FilteredCategoryList = categoryList && categoryList.filter(function(elem, pos, self) {
    return self.indexOf(elem) === pos;
  })
  FilteredCategoryList.push("Todos")

  const renderCategory = FilteredCategoryList && FilteredCategoryList.map((category) =>{
    return(
      <p onClick={() => props.onClickCategory(category)} value={category} key={category}>{category}</p>
    )
  })

  return (
    <FilterField>
      <FilterText>
        {renderCategory}
      </FilterText>
    </FilterField>
  );
};
