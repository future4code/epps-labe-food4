import React from 'react'
import AdressForm from './AdressForm'
import { TitleAdress } from './styled'

const AdressPage = () =>{
    return(
        <div>
            <TitleAdress>
                <p>Meu endereço</p>
            </TitleAdress>
            <AdressForm/>
        </div>
    )
}

export default AdressPage