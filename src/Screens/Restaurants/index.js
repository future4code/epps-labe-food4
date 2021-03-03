import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "./../../Constants/Urls";
import { Container } from "./styled";
import RestaurantInfo from "./RestaurantInfo";
import CartCard from "../../Components/CartCard";

const Restaurants = () => {
  const [restaurant, setRestaurant] = useState([]);
  const getRestaurants = async () => {
    const headers = { headers: { auth: localStorage.getItem("token") } };
    try {
      const res = await axios.get(`${BASE_URL}/restaurants/1`, headers);
      setRestaurant(res.data.restaurant);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  let deliveryTime = "";
  if (restaurant.deliveryTime <= 15) {
    deliveryTime = "0 - 15 min";
  }
  if (restaurant.deliveryTime > 15 && restaurant.deliveryTime <= 30) {
    deliveryTime = "15 - 30 min";
  }
  if (restaurant.deliveryTime > 30 && restaurant.deliveryTime <= 45) {
    deliveryTime = "30 - 45 min";
  }
  if (restaurant.deliveryTime > 45 && restaurant.deliveryTime <= 60) {
    deliveryTime = "45 - 60 min";
  }
  if (restaurant.deliveryTime > 60) {
    deliveryTime = "60+ min";
  }

  let menuCategories = [
    restaurant && restaurant.products && restaurant.products[0].category,
  ];
  if (restaurant && restaurant.products) {
    for (let i = 0; i < restaurant.products.length; i++) {
      let idx = menuCategories.indexOf(restaurant.products[i].category);
      if (idx < 0) {
        menuCategories.push(restaurant.products[i].category);
      }
    }
  }

  return (
    <Container>
      <RestaurantInfo
        logoUrl={restaurant.logoUrl}
        name={restaurant.name}
        category={restaurant.category}
        deliveryTime={deliveryTime}
        shipping={
          restaurant && restaurant.shipping && restaurant.shipping.toFixed(2)
        }
        address={restaurant.address}
      />
      <div id="menu-section">
        {menuCategories.map((category) => {
          return (
            <div key={category}>
              <h2 id="menu-category">{category}</h2>
              <hr />
              {restaurant &&
                restaurant.products &&
                restaurant.products.map((item) => {
                  if (item.category == category) {
                    return (
                      <CartCard
                        key={item.id}
                        img={item.photoUrl}
                        title={item.name}
                        description={item.description}
                        price={item.price.toFixed(2)}
                      />
                    );
                  }
                })}
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Restaurants;
