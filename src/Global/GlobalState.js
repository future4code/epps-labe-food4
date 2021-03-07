import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [address, setAddress] = useState([])
  const [cart, setCart] = useState([]);

  const [activeHome, setActiveHome] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);

  const states = { cart, activeHome, activeCart, activeProfile };
  const setters = { setCart, setActiveHome, setActiveCart, setActiveProfile };
  const requests = {};

  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
