import React from "react";
import styles from "./Buttons.module.scss";

const SearchButtons = (props) => {
  const { restaurantSelector, selectedRestaurant } = props;
  return (
    <div className={styles.buttons}>
      <a
        href={selectedRestaurant.events_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={styles.viewMore}>Show me more info</button>
      </a>
      <button className={styles.next} onClick={() => restaurantSelector()}>
        Nah, next!
      </button>
    </div>
  );
};

export default SearchButtons;
