import React from "react";
import styles from "./Buttons.module.scss";

const SearchButtons = (props) => {
  const { restaurantSelector } = props;

  // const deleteRestaurant = () => {
  //   updateRestaurants((prevRestaurants) => {
  //     return prevRestaurants.filter((item) => {
  //       return item.restaurant.id !== selectedRestaurant.id;
  //     });
  //   });
  // };

  // const restaurantSelector = () => {
  //   const randomNumber = Math.floor(Math.random() * restaurants.length);
  //   if (search) {
  //     updateSelectedRestaurant(restaurants[randomNumber].restaurant);
  //   }
  // };

  // const handleClick = () => {
  //   deleteRestaurant();
  //   restaurantSelector();
  // };

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
