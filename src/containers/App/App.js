import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import SearchType from "../../components/SearchType/SearchType";
import CitySearch from "../CitySearch/CitySearch";
import ProximitySearch from "../../components/ProximitySearch/ProximitySearch";
import Background from "../../components/Background/Background";
import axios from "axios";

function App() {
  const [search, updateSearch] = useState(null);
  const [category, updateCategory] = useState(true);
  const [searchType, setSearchType] = useState(null);
  const [position, updatePosition] = useState({
    latitude: null,
    longitude: null,
  });
  const [restaurants, updateRestaurants] = useState(null);
  const [selectedRestaurant, updateSelectedRestaurant] = useState("");

  const restaurantSelector = () => {
    const randomNumber = Math.floor(Math.random() * 20);
    if (search) {
      updateSelectedRestaurant(restaurants[randomNumber].restaurant);
    }
  };

  useEffect(() => {
    const zomatoCategory = category ? "6,8,9,10" : "14";
    const ZOMATO_API_KEY = process.env.REACT_APP_ZOMATO_API_KEY;

    let zomato = axios.create({
      baseURL: "https://developers.zomato.com/api/v2.1/",
    });

    zomato.defaults.headers.common["user-key"] = `${ZOMATO_API_KEY}`;
    zomato.defaults.headers.post["Content-Type"] = "application/json";

    const handleLocationSearch = async () => {
      zomato
        .get(
          `search?start=1&count=50&&category=${zomatoCategory}&lat=${position.latitude}&lon=${position.longitude}&radius=500&sort=real_distance`
        )
        .then((response) => {
          updateSearch(true);
          updateRestaurants(response.data.restaurants);
          console.log(`location Search: ${restaurants}`);
        });
    };
    console.log(`useEffect load: ${restaurants}`);

    handleLocationSearch();
  }, [position]);

  useEffect(() => {
    restaurantSelector();
  }, [restaurants]);

  const resetSearch = () => {
    updateSelectedRestaurant("");
    updateSearch(null);
    setSearchType(null);
    updateRestaurants(null);
    console.log(`reset: ${restaurants}`);
  };

  const handleCategoryChange = (categoryEl) => {
    updateCategory(categoryEl);
    resetSearch();
  };

  return (
    <>
      <Header
        category={category}
        updateCategory={updateCategory}
        handleCategoryChange={handleCategoryChange}
      />

      {!searchType ? (
        <SearchType
          updateSearch={updateSearch}
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
        <ProximitySearch
          selectedRestaurant={selectedRestaurant}
          restaurantSelector={restaurantSelector}
        />
      )}
      <Background category={category} />
    </>
  );
}

export default App;
