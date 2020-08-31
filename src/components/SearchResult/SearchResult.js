import React from "react";
import Card from "../Card/Card";

const SearchResult = (props) => {
  const { selectedRestaurant, restaurantSelector } = props;
  return (
    <Card>
      {selectedRestaurant ? (
        <>
          <p>{selectedRestaurant.cuisines}</p>
          <h3>{selectedRestaurant.name}</h3>
          <p>{selectedRestaurant.location.address}</p>
          <h4>Price Range</h4>
          <h5>{selectedRestaurant.price_range}</h5>
          <h4>User Rating</h4>
          <h5>{selectedRestaurant.user_rating.aggregate_rating}</h5>
          <button onClick={() => restaurantSelector()}>Nah, next!</button>
        </>
      ) : null}
    </Card>
  );
};

export default SearchResult;
