import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ErrorPage from "../Screens/ErrorPage/ErrorPage";
import FeedPage from "../Screens/FeedPage/FeedPage";
import LoginPage from '../Screens/LoginPage/LoginPage'
import RegisterPage from "../Screens/RegisterPage/RegisterPage";
import AddressPage from '../Screens/AdressForm/AdressPage';
import RestarantsInfos from '../Screens/Restaurants/index';
import ProfilePage from '../Screens/ProfilePage/ProfilePage';
import EditAddress from '../Screens/ProfilePage/EditPage/EditAddress';
import EdditInfos from '../Screens/ProfilePage/EditPage/EditInfo';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/feed'>
                    <FeedPage />
                </Route>

                <Route exact path='/'>
                    <LoginPage />
                </Route>

                <Route exact path='/register'>
                    <RegisterPage />
                </Route>

                <Route exact path='/address-form'>
                    <AddressPage />
                </Route>

                <Route exact path='/restaurants-infos'>
                    <RestarantsInfos />
                </Route>

                <Route exact path='/profile'>
                    <ProfilePage />
                </Route>
                <Route exact path='/edit-profile-address'>
                    <EditAddress />
                </Route>

                <Route exact path='/edit-profile-info'>
                    <EdditInfos />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;