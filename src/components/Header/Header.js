import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <h1 className={styles.logo}>feedme</h1>
    </div>
  );
};

export default Header;
