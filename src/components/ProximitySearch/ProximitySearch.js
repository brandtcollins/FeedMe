import React from "react";
import Container from "../Container/Container";
import SearchResult from "../SearchResult/SearchResult";

const Proximity = (props) => {
  const { selectedRestaurant, restaurantSelector } = props;

  return (
    <Container>
      <SearchResult
        selectedRestaurant={selectedRestaurant}
        restaurantSelector={restaurantSelector}
      />
    </Container>
  );
};

export default Proximity;
