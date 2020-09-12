import React, { useState } from "react";
import axios from "axios";
import Container from "../../components/Container/Container";
import SearchResult from "../../components/SearchResult/SearchResult";
import SearchForm from "./SearchForm/SearchForm";

const City = (props) => {
  const OPENCAGE_API_KEY = process.env.REACT_APP_OPENCAGE_API_KEY;

  const [input, updateInput] = useState("");

  const {
    updateSearch,
    searchType,
    updatedPosition,
    selectedRestaurant,
    updateSelectedRestaurant,
    restaurantSelector,
    restaurant,
    error,
    updateError,
  } = props;

  const handleSearch = (event) => {
    updateSelectedRestaurant();
    event.preventDefault();
    updateSearch(input);

    const findCityCoordinates = async () => {
      axios
        .get(
          `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
            input
          )}&key=${OPENCAGE_API_KEY}&language=en&pretty=1`
        )
        .then((response) => {
          if (response.data.results.length === 0) {
            updateError("Hmm...location wasn't found.  Search again.");
          } else {
            let searchResults = response.data.results.shift();
            updatedPosition({
              latitude: searchResults.geometry.lat,
              longitude: searchResults.geometry.lng,
            });
          }
        })
        .catch((err) => {
          if (err) {
            console.log(err);
          }
        });
    };

    findCityCoordinates();
  };

  const handleChange = (event) => {
    updateInput(event.target.value);
  };

  return (
    <Container searchType={searchType}>
      <SearchForm handleSearch={handleSearch} handleChange={handleChange} />
      <SearchResult
        restaurant={restaurant}
        selectedRestaurant={selectedRestaurant}
        restaurantSelector={restaurantSelector}
        error={error}
      />
    </Container>
  );
};

export default City;
