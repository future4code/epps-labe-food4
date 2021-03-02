import React, { useState } from "react";
import { InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { SearchContainer, TextFieldSearch } from "./styled";

export const SearchFilter = (props) => {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <SearchContainer>
      <TextFieldSearch
        variant="outlined"
        size="medium"
        value={search}
        type="text"
        name="restaurant"
        placeholder="Restaurante..."
        onChange={handleChangeSearch}
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
