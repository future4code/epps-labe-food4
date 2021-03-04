import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom'
import { goToRestaurants } from '../../Routes/Coordinator';

function ErrorPage() {

    const history = useHistory()

    const goToPage = () =>{
        goToRestaurants(history)
    }
    return (
        <div>
            <h1>Error Page</h1>

            <Button
            variant={'outlined'} 
            onClick={goToPage}>Voltar</Button>
        </div>

    )
} export default ErrorPage;