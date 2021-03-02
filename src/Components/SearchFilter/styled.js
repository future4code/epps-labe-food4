import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextFieldSearch = styled(TextField)`
  width: 328px;
  height: 56px;
  padding: 16px 8px 16px 17px;
  color: black;
  border-radius: 2px;
  border: 1px solid (--var-greyish);
`;
