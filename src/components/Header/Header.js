import React from "react";
import styles from "./Header.module.scss";

const classNames = require("classnames");

const Header = (props) => {
  const { category, handleCategoryChange } = props;

  const toggle = !category ? null : styles.active;

  const handleToggle = () => {
    handleCategoryChange(!category);
  };

  return (
    <>
      <div className={styles.Header}>
        <h1 className={styles.logo}>
          <a href="/">feedme</a>
        </h1>
        <div onClick={handleToggle} className={styles.themeSwitch}>
          <div className={styles.lable}>
            <h5>Food</h5>
          </div>
          <div className={styles.lable}>
            <h5>Drinks</h5>
          </div>
          <div className={classNames(styles.switch, toggle)}></div>
        </div>
      </div>
      <div className={styles.hero}>
        <h2>“Where do you want to eat?”</h2>
        <h2>“IDK, where do you want to eat?”</h2>
        <p>We got you covered, start your search below.</p>
      </div>
    </>
  );
};

export default Header;
