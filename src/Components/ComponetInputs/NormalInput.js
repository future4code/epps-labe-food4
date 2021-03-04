import { TextField } from '@material-ui/core'
import React from 'react'
import { ThemeProvider } from "@material-ui/core";
import theme from './Theme/theme';
import {InputContainer} from './Styled'


function NormalInput(props){
    return (
        <ThemeProvider theme={theme}>
          <InputContainer>
            <TextField
              name={props.name}
              placeholder={props.placeholder}
              id="input"
              label={props.label}
              variant={"outlined"}
              color={"primary"}
              value={props.value}
              type={props.type}
              onChange={props.onChange}
            />
          </InputContainer>
        </ThemeProvider>
      );    
}

export default NormalInput;