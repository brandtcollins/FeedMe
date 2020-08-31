import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  //   const [isHovered, setHover] = useState(false);

  //   const handleHover = () => {
  //     setHover(!isHovered);
  //   };

  return (
    <div
      className={styles.card}
      onClick={props.onClick}
      //   onMouseOver={handleHover}
      //   onMouseLeave={}
    >
      {props.children}
    </div>
  );
};

export default Card;
