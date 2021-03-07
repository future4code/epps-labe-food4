import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorPage from "../Screens/ErrorPage/ErrorPage";
import FeedPage from "../Screens/FeedPage/FeedPage";
import LoginPage from "../Screens/LoginPage/LoginPage";
import RegisterPage from "../Screens/RegisterPage/RegisterPage";
import AddressPage from "../Screens/AddressForm/AddressPage";
import RestarantsInfos from "../Screens/Restaurants/index";
import ProfilePage from "../Screens/ProfilePage/ProfilePage";
import EditAddress from "../Screens/ProfilePage/EditPage/EditAddress";
import EdditInfos from "../Screens/ProfilePage/EditPage/EditInfo";
import CartPage from "../Screens/CartPage/CartPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>

        <Route exact path="/feed">
          <FeedPage />
        </Route>

        <Route exact path="/register/1">
          <RegisterPage />
        </Route>

        <Route exact path="/register/2">
          <AddressPage />
        </Route>

        <Route exact path="/restaurant/:restaurantId">
          <RestarantsInfos />
        </Route>

        <Route exact path="/cart">
          <CartPage />
        </Route>

        <Route exact path="/profile">
          <ProfilePage />
        </Route>

        <Route exact path="/edit-profile-address">
          <EditAddress />
        </Route>

        <Route exact path="/edit-profile-info">
          <EdditInfos />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
