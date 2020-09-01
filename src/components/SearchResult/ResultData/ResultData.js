import React from "react";
import PriceDisplay from "../../../utils/PriceDisplay/PriceDisplay";
import styles from "./ResultData.module.scss";

const ResultData = (props) => {
  const {
    cuisines,
    name,
    location,
    price_range,
    user_rating,
  } = props.selectedRestaurant;
  return (
    <div className={styles.results}>
      <p className={styles.cuisine}>{cuisines}</p>
      <h2>{name}</h2>
      <p className={styles.address}>{location.address}</p>
      <div className={styles.ratings}>
        <div>
          <h4>Price Range</h4>
          <h2 className={styles.highlight}>{PriceDisplay(price_range)}</h2>
        </div>
        <div>
          <h4>User Rating</h4>
          {user_rating.aggregate_rating === 0 ? (
            <h5>Rating not found.</h5>
          ) : (
            <h2 className={styles.highlight}>
              <span>{user_rating.aggregate_rating}</span>
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultData;
