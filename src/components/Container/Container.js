import React from "react";
import styles from "./Container.module.scss";

const Container = (props) => {
  const { children, searchType } = props;

  const searchClass = !searchType ? styles.select : styles.results;

  return <div className={searchClass}>{children}</div>;
};

export default Container;
