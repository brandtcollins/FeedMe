import React from "react";
import styles from "./Background.module.scss";

const classNames = require("classnames");

const Background = (props) => {
  const foodClass = props.category ? null : styles.hide;
  const drinkClass = !props.category ? null : styles.hide;

  return (
    <>
      <div className={classNames(styles.food, foodClass)}></div>
      <div className={classNames(styles.drinks, drinkClass)}></div>
    </>
  );
};

export default Background;
