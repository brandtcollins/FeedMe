import React from "react";
import Card from "../Card/Card";
import styles from "./SearchResult.module.scss";

const SearchResult = (props) => {
  const { selectedRestaurant, restaurantSelector } = props;
  const {
    cuisines,
    name,
    location,
    price_range,
    user_rating,
  } = selectedRestaurant;

  const PriceDisplay = (price) => {
    let value = "";

    switch (price) {
      case 1:
        value = (
          <>
            <span>$</span> $ $ $
          </>
        );
        break;
      case 2:
        value = (
          <>
            <span>$ $</span> $ $
          </>
        );
        break;
      case 3:
        value = (
          <>
            <span>$ $ $</span> $
          </>
        );
        break;
      case 4:
        value = (
          <>
            <span>$ $ $ $</span>
          </>
        );
        break;
    }
    return value;
  };

  return (
    <Card>
      {selectedRestaurant ? (
        <>
          <p>{cuisines}</p>
          <h2>{name}</h2>
          <p>{location.address}</p>
          <h4>Price Range</h4>
          <h2 className={styles.highlight}>{PriceDisplay(price_range)}</h2>
          <h4>User Rating</h4>
          {user_rating.aggregate_rating === 0 ? (
            <h5>Rating not found.</h5>
          ) : (
            <h2 className={styles.highlight}>
              <span>{user_rating.aggregate_rating}</span>
            </h2>
          )}
          <button onClick={() => restaurantSelector()}>Nah, next!</button>
        </>
      ) : (
        <>
          <h1 className={styles.loading}>feedme</h1>
          <p className={styles.loading}>
            Finding your next favorite grub spot...
          </p>
        </>
      )}
    </Card>
  );
};

export default SearchResult;
