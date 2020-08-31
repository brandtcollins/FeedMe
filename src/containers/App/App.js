import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import SearchType from "../../components/SearchType/SearchType";
import CitySearch from "../CitySearch/CitySearch";
import ProximityResults from "../../components/ProximitySearch/ProximitySearch";
import Background from "../../components/Background/Background";
import axios from "axios";
import styles from "../App/App.module.scss";

function App() {
  const [search, updateSearch] = useState("");
  const [searchType, setSearchType] = useState(null);
  const [position, updatePosition] = useState({
    latitude: null,
    longitude: null,
  });
  const [restaurants, updateRestaurants] = useState(null);
  const [selectedRestaurant, updateSelectedRestaurant] = useState("");

  const restaurantSelector = () => {
    const randomNumber = Math.floor(Math.random() * 21);
    if (search) {
      updateSelectedRestaurant(restaurants[randomNumber].restaurant);
    }
  };

  useEffect(() => {
    let zomato = axios.create({
      baseURL: "https://developers.zomato.com/api/v2.1/",
    });

    zomato.defaults.headers.common["user-key"] =
      "f56b331b1f0c45b871f1924616db8113";
    zomato.defaults.headers.post["Content-Type"] = "application/json";

    const handleLocationSearch = () => {
      zomato
        .get(
          `search?start=1&count=50&&category=9&lat=${position.latitude}&lon=${position.longitude}&radius=500&sort=real_distance`
        )
        .then((response) => {
          updateSearch(true);
          updateRestaurants(response.data.restaurants);
        });
    };

    handleLocationSearch();
  }, [position]);

  useEffect(() => {
    restaurantSelector();
  }, [restaurants]);

  return (
    <div className={styles.container}>
      <Header />
      {!searchType ? (
        <SearchType
          setSearchType={setSearchType}
          updatedPosition={updatePosition}
        />
      ) : searchType === "city" ? (
        <CitySearch
          updateSearch={updateSearch}
          updatedPosition={updatePosition}
          selectedRestaurant={selectedRestaurant}
          restaurants={restaurants}
          restaurantSelector={restaurantSelector}
        />
      ) : (
        <ProximityResults
          selectedRestaurant={selectedRestaurant}
          restaurantSelector={restaurantSelector}
        />
      )}
      <div className={styles.background}></div>
      <Background />
    </div>
  );
}

export default App;
