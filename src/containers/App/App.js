import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import SearchType from "../../components/SearchType/SearchType";
import CitySearch from "../CitySearch/CitySearch";
import ProximityResults from "../../components/ProximitySearch/ProximitySearch";
import Background from "../../components/Background/Background";
import axios from "axios";

function App() {
  const ZOMATO_API_KEY = process.env.REACT_APP_ZOMATO_API_KEY;

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

    zomato.defaults.headers.common["user-key"] = `${ZOMATO_API_KEY}`;
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
    console.log(`searchType: ${searchType}`);
    handleLocationSearch();
  }, [position]);

  useEffect(() => {
    restaurantSelector();
  }, [restaurants]);

  return (
    <>
      <Header />
      {!searchType ? (
        <SearchType
          setSearchType={setSearchType}
          updatedPosition={updatePosition}
        />
      ) : searchType === "city" ? (
        <CitySearch
          searchType={searchType}
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
      <Background />
    </>
  );
}

export default App;
