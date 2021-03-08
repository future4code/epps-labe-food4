import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { getActiveOrder } from "../../Services/user";
import Header from "../../Components/Header/index";
import { SearchFilter } from "../../Components/SearchFilter/SearchFilter";
import RestaurantsCard from "../../Components/RestaurantsCard/RestaurantsCard";
import { deliveryText } from "./../../Global/Functions";
import { useProtectedPage } from "./../../Hooks/useProtectedPage";
import { goToRestaurant } from "../../Routes/Coordinator";
import { ContainerCardFeed } from "../FeedPage/styled";
import { ContainerTitleSearch } from "./Styled";

function SearchPage() {
  useProtectedPage();
  const history = useHistory();
  const [restaurants, setRestaurants] = useState([]);
  const [category, setCategory] = useState("");
  const [inputName, setInputName] = useState("");
  const [order, setOrder] = useState(null);

  useEffect(() => {
    getRestaurants();
    getOrder();
  }, []);

  const getRestaurants = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants`,
        {
          headers: {
            auth: localStorage.getItem("token"),
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

  const getOrder = () => {
    getActiveOrder(setOrder);
  };

  const filterList = () => {
    const list =
      restaurants &&
      restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(inputName.toLowerCase())
      );

    return list;
  };

  const filteredList = filterList();
  console.log(filteredList);
  const render =
    filteredList &&
    filteredList.map((res) => {
      const deliveryTime = deliveryText(res);
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

  const onChangeName = (e) => {
    setInputName(e.target.value);
    filterList(category, inputName);
  };

  const contentSearch = (
    <ContainerTitleSearch>
      <p>Não encontramos :(</p>
    </ContainerTitleSearch>
  );
  return (
    <div>
      <Header title="Busca" arrow="true" />
      <SearchFilter
        onChangeName={onChangeName}
        name={inputName}
        restaurants={restaurants}
        setRestaurants={setRestaurants}
      />

      <ContainerCardFeed>
        {inputName !== "" ? (
          <>{render.length > 0 ? render : contentSearch}</>
        ) : (
          <ContainerTitleSearch>
            <p>
              {inputName === "" ? (
                "Busque por nome de restaurante"
              ) : (
                <>{filteredList.length === 0 && <p>Não encontramos</p>}</>
              )}
            </p>
          </ContainerTitleSearch>
        )}
      </ContainerCardFeed>
    </div>
  );
}
export default SearchPage;
