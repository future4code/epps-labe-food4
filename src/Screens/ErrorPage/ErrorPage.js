import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom'
import { goToFeed } from '../../Routes/Coordinator';

function ErrorPage() {

    const history = useHistory()

    const goToPage = () =>{
        goToFeed(history)
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