import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <h1 className={styles.logo}>
        <a href="/">feedme</a>
      </h1>
    </div>
  );
};

export default Header;
