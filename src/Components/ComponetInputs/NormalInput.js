import { TextField } from '@material-ui/core'
import React from 'react'
import { ThemeProvider } from "@material-ui/core";
import theme from './Theme/theme';
import {InputContainer} from './Styled'


function NormalInput(){
    return(
        <ThemeProvider theme={theme}>
            <InputContainer>
                <TextField
                    placeholder='nome' 
                    id='input'
                    label={'Nome'}
                    variant={'outlined'}
                    color={'primary'}
                />
            </InputContainer>
        </ThemeProvider>
    )
}

export default NormalInput;