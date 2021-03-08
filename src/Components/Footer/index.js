import React, { useContext } from "react";
import { Container } from "./styled";
import homeIcon from "../../Imgs/home-icon.png";
import homeIconActive from "../../Imgs/home-icon-active.png";
import cartIcon from "../../Imgs/cart-icon.png";
import cartIconActive from "../../Imgs/cart-icon-active.png";
import profileIcon from "../../Imgs/profile-icon.png";
import profileIconActive from "../../Imgs/profile-icon-active.png";
import { useHistory } from "react-router-dom";
import { goToCart, goToProfile } from "../../Routes/Coordinator";
import { goToFeed } from "./../../Routes/Coordinator";
import GlobalStateContext from "./../../Global/GlobalStateContext";

const Footer = () => {
  const history = useHistory();
  const { states, setters } = useContext(GlobalStateContext);

  const homeClick = () => {
    setters.setActiveHome(!states.activeHome);
    setters.setActiveCart(false);
    setters.setActiveProfile(false);
    goToFeed(history);
  };

  const cartClick = () => {
    setters.setActiveHome(false);
    setters.setActiveCart(!states.activeCart);
    setters.setActiveProfile(false);
    goToCart(history);
  };

  const profileClick = () => {
    setters.setActiveHome(false);
    setters.setActiveCart(false);
    setters.setActiveProfile(!states.activeProfile);
    goToProfile(history);
  };

  return (
    <Container>
      <div className="icon">
        <img
          src={states.activeHome ? homeIconActive : homeIcon}
          alt="home icon"
          onClick={homeClick}
        />
      </div>
      <div className="icon">
        <img
          src={states.activeCart ? cartIconActive : cartIcon}
          alt="cart icon"
          onClick={cartClick}
        />
      </div>
      <div className="icon">
        <img
          src={states.activeProfile ? profileIconActive : profileIcon}
          alt="profile icon"
          onClick={profileClick}
        />
      </div>
    </Container>
  );
};

export default Footer;
