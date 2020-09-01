import React from "react";
import styles from "./Buttons.module.scss";

const SearchButtons = (props) => {
  return (
    <div className={styles.buttons}>
      <button
        className={styles.viewMore}
        onClick={() => props.restaurantSelector()}
      >
        Sounds good!
      </button>
      <button
        className={styles.next}
        onClick={() => props.restaurantSelector()}
      >
        Nah, next!
      </button>
    </div>
  );
};

export default SearchButtons;
