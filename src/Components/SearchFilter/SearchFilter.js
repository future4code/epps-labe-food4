import React from "react";
import { InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { SearchContainer, TextFieldSearch } from "./styled";

export const SearchFilter = (props) => {
  return (
    <SearchContainer>
      <TextFieldSearch
        variant="outlined"
        size="medium"
        value={props.name}
        type="text"
        name="restaurant"
        placeholder="Restaurante..."
        onChange={props.onChangeName}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </SearchContainer>
  );
};
