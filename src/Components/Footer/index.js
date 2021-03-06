import React, { useState } from "react";
import { Container } from "./styled";
import homeIcon from "./Imgs/home-icon.png";
import homeIconActive from "./Imgs/home-icon-active.png";
import cartIcon from "./Imgs/cart-icon.png";
import cartIconActive from "./Imgs/cart-icon-active.png";
import profileIcon from "./Imgs/profile-icon.png";
import profileIconActive from "./Imgs/profile-icon-active.png";
import { useHistory } from "react-router-dom";
import { goToCart } from "../../Routes/Coordinator";
import { goToFeed } from './../../Routes/Coordinator';

const Footer = () => {
  const history = useHistory();
  const [activeHome, setActiveHome] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);

  const homeClick = () => {
    setActiveHome(!activeHome);
    setActiveCart(false);
    setActiveProfile(false);
    goToFeed(history);
  };

  const cartClick = () => {
    setActiveHome(false);
    setActiveCart(!activeCart);
    setActiveProfile(false);
    goToCart(history);
  };

  const profileClick = () => {
    setActiveHome(false);
    setActiveCart(false);
    setActiveProfile(!activeProfile);
  };

  // window.onscroll = function () {
  //   scrollFunction();
  // };
  // const scrollFunction = () => {
  //   if (
  //     document.getElementById("footer") &&
  //     (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
  //   ) {
  //     document.getElementById("footer").style.bottom = "0";
  //   } else {
  //     document.getElementById("footer").style.bottom = "-50px";
  //   }
  // };

  return (
    <Container id="footer">
      <div className="icon">
        <img
          src={activeHome ? homeIconActive : homeIcon}
          alt="home icon"
          onClick={homeClick}
        />
      </div>
      <div className="icon">
        <img
          src={activeCart ? cartIconActive : cartIcon}
          alt="cart icon"
          onClick={cartClick}
        />
      </div>
      <div className="icon">
        <img
          src={activeProfile ? profileIconActive : profileIcon}
          alt="profile icon"
          onClick={profileClick}
        />
      </div>
    </Container>
  );
};

export default Footer;
