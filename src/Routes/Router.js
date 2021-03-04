import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ErrorPage from "../Screens/ErrorPage/ErrorPage";
import FeedPage from "../Screens/FeedPage/FeedPage";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/restaurantes'>
                    <FeedPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;