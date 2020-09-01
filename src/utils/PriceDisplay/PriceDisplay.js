import React from "react";

const PriceDisplay = (price) => {
  let value = "";

  switch (price) {
    case 1:
      value = (
        <>
          <span>$</span> $ $ $
        </>
      );
      break;
    case 2:
      value = (
        <>
          <span>$ $</span> $ $
        </>
      );
      break;
    case 3:
      value = (
        <>
          <span>$ $ $</span> $
        </>
      );
      break;
    case 4:
      value = (
        <>
          <span>$ $ $ $</span>
        </>
      );
      break;
    default:
      value = null;
  }
  return value;
};

export default PriceDisplay;
