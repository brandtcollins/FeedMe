import React from "react";
import styles from "./Buttons.module.scss";

const SearchButtons = (props) => {
  const { restaurantSelector } = props;

  return (
    <div className={styles.buttons}>
      <button className={styles.viewMore} onClick={() => restaurantSelector()}>
        Sounds good!
      </button>
      <button className={styles.next} onClick={() => restaurantSelector()}>
        Nah, next!
      </button>
    </div>
  );
};

export default SearchButtons;
