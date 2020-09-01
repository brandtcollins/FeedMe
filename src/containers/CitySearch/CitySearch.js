import React, { useState } from "react";
import axios from "axios";
import Container from "../../components/Container/Container";
import SearchResult from "../../components/SearchResult/SearchResult";

const City = (props) => {
  const OPENCAGE_API_KEY = process.env.REACT_APP_OPENCAGE_API_KEY;

  const [input, updateInput] = useState("");

  const {
    updateSearch,
    updatedPosition,
    selectedRestaurant,
    restaurantSelector,
    restaurant,
  } = props;

  const handleSearch = (event) => {
    event.preventDefault();
    updateSearch(input);

    const findCityCoordinates = async () => {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          input
        )}&key=${OPENCAGE_API_KEY}&language=en&pretty=1`
      );
      let searchResults = response.data.results.shift();
      updatedPosition({
        latitude: searchResults.geometry.lat,
        longitude: searchResults.geometry.lng,
      });
    };
    findCityCoordinates();
  };

  const handleChange = (event) => {
    updateInput(event.target.value);
  };

  return (
    <Container>
      <form onSubmit={handleSearch}>
        <input onChange={handleChange} placeholder="Search by city"></input>
        <button>Search</button>
      </form>
      <SearchResult
        restaurant={restaurant}
        selectedRestaurant={selectedRestaurant}
        restaurantSelector={restaurantSelector}
      />
    </Container>
  );
};

export default City;
