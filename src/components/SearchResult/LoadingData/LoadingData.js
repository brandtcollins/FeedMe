import React from "react";
import styles from "./LoadingData.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <h1>feedme</h1>
      <p>Finding your next favorite grub spot...</p>
    </div>
  );
};

export default Loading;
