import React, { useEffect, useState } from "react";
import { CategoryFilter } from "../../Components/CategoryFilter/CategoryFilter";
import RestaurantsCard from "../../Components/RestaurantsCard/RestaurantsCard";
import { SearchFilter } from "../../Components/SearchFilter/SearchFilter";
import axios from "axios";
import { Wrapper, ContainerCardFeed } from "./styled";
import { useProtectedPage } from "./../../Hooks/useProtectedPage";
import { goToRestaurant } from "../../Routes/Coordinator";
import { useHistory } from 'react-router-dom';
import Footer from "../../Components/Footer";

function FeedPage() {
  useProtectedPage();
  const history = useHistory();
  const [restaurants, setRestaurants] = useState([]);
  const [category, setCategory] = useState("");
  const [inputName, setInputName] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants`,
        {
          headers: {
            auth:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imd2dVE5MkxBSXdMVm5RdjBjY3dyIiwibmFtZSI6IkRhbmllbFIiLCJlbWFpbCI6ImRhbm4ucmliQGdtYWlsLmNvbSIsImNwZiI6IjE2NS4xNTIuNzc3LTAwIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEpvc8OpIGd1aW1hcsOjZXMsIDE3NywgNzEgLSBCb2FjYSBkbyBSaW8iLCJpYXQiOjE2MTQ3MDg2NTh9.GoVyPdn8CYzkQuw2Mw3d0juipqDlsvQBhqmhCr2d2UQ",
          },
        }
      )
      .then((res) => {
        setRestaurants(res.data.restaurants);
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  const filterList = () => {
    const list =
      restaurants &&
      restaurants
        .filter((restaurant) => {
          if (category === "Todos") {
            return restaurant;
          } else {
            return restaurant.category.includes(category);
          }
        })
        .filter((restaurant) =>
          restaurant.name.toLowerCase().includes(inputName.toLowerCase())
        );

    return list;
  };

  const filteredList = filterList();

  const render = filteredList.map((res) => {
    let deliveryTime = "";
    if (res.deliveryTime <= 15) {
      deliveryTime = "0 - 15";
    }
    if (res.deliveryTime > 15 && res.deliveryTime <= 30) {
      deliveryTime = "15 - 30";
    }
    if (res.deliveryTime > 30 && res.deliveryTime <= 45) {
      deliveryTime = "30 - 45";
    }
    if (res.deliveryTime > 45 && res.deliveryTime <= 60) {
      deliveryTime = "45 - 60";
    }
    if (res.deliveryTime > 60) {
      deliveryTime = "60+";
    }
    return (
      <RestaurantsCard
        key={res.id}
        img={res.logoUrl}
        restaurant={res.name}
        deliveryTime={deliveryTime}
        tax={res.shipping}
        onClick={() => goToRestaurant(history, res.id)}
      />
    );
  });

  //capturando o value da categoria clicada e chamando a função que filtra os restaurantes
  const onClickCategory = (categoryValue) => {
    setCategory(categoryValue);
    filterList(categoryValue, inputName);
  };

  //capturando o value do input e chamando a função que filtra os restaurantes
  const onChangeName = (e) => {
    setInputName(e.target.value);
    filterList(category, inputName);
  };

  return (
    <Wrapper>
      <SearchFilter
        onChangeName={onChangeName}
        name={inputName}
        restaurants={restaurants}
        setRestaurants={setRestaurants}
      />
      <CategoryFilter
        restaurants={restaurants}
        onClickCategory={onClickCategory}
      />

      <ContainerCardFeed>{render}</ContainerCardFeed>
      <Footer/>
    </Wrapper>
  );
}

export default FeedPage;
