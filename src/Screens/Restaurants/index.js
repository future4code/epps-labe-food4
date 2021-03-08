import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./../../Constants/Urls";
import { Container, MenuCategory, MenuSection } from "./styled";
import RestaurantInfo from "./RestaurantInfo";
import MenuItemCard from "../../Components/MenuItemCard";
import Footer from "../../Components/Footer";
import { deliveryText } from "./../../Global/Functions";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import Header from "../../Components/Header";

const Restaurants = () => {
  useProtectedPage();
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState([]);
  const getRestaurants = async () => {
    const headers = { headers: { auth: localStorage.getItem("token") } };
    try {
      const res = await axios.get(
        `${BASE_URL}/restaurants/${restaurantId}`,
        headers
      );
      setRestaurant(res.data.restaurant);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const deliveryTime = deliveryText(restaurant);

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
    <>
      <Header title="Restaurante" arrow="true" />
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
        <MenuSection>
          {menuCategories.map((category) => {
            return (
              <div key={category}>
                <MenuCategory>{category}</MenuCategory>
                <hr />
                {restaurant &&
                  restaurant.products &&
                  restaurant.products.map((item) => {
                    if (item.category === category) {
                      return (
                        <MenuItemCard
                          key={item.id}
                          restaurantId={restaurant.id}
                          name={restaurant.name}
                          address={restaurant.address}
                          deliveryTime={deliveryTime}
                          shipping={restaurant.shipping}
                          productId={item.id}
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
        </MenuSection>
      </Container>
      <Footer />
    </>
  );
};

export default Restaurants;
