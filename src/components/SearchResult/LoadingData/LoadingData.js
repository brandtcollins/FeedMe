import React from "react";
import styles from "./LoadingData.module.scss";

const Loading = (props) => {
  const { error } = props;
  return (
    <div className={styles.loading}>
      <h1>feedme</h1>
      {!error ? (
        <p>Finding your next favorite grub spot...</p>
      ) : (
        <p>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

export default Loading;
