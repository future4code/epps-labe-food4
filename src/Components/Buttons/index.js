import React from 'react'
import { Btn, ContainerBtn } from './styled'

const Buttons = (props) =>{
    return(
        <ContainerBtn>
            
                <Btn>
                    
                    <p>{props.text}</p>
                    
                </Btn>
            
        </ContainerBtn>
    )
}

export default Buttons