import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [cart, setCart] = useState([
    {
      id: 9,
      restaurant: "Mexicaníssimo",
      address: "Largo dos Jaguarés, 12 - Nova Bragança",
      deliveryTime: 20,
      shipping: 3,
      order: [
        {
          id: "tNu8SQwZdC0bIHfvqOyY",
          quantity: 2,
          photoUrl:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/cc006d82-8e09-4c16-a6b2-8ff36c5c2059/201909251001_EGMb_b.jpg",
          name: "Burrito de carne",
          description: "Os amados burritos chegam ao Brasil",
          price: 29,
        },
        {
          id: "sLZbBHTlEMtTwi9m5B6A",
          quantity: 5,
          photoUrl:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/cc006d82-8e09-4c16-a6b2-8ff36c5c2059/201909251208_xUqS_f.jpg",
          name: "Fajitas mistas",
          description: "Picantes",
          price: 39,
        },
      ],
    },
  ]);
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
