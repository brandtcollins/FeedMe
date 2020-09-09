import React, { useState } from "react";
import Card from "../Card/Card";
import ResultData from "./ResultData/ResultData";
import Buttons from "./Buttons/Buttons";
import LoadingData from "./LoadingData/LoadingData";

const SearchResult = (props) => {
  const { selectedRestaurant, restaurantSelector, error } = props;

  return (
    <Card>
      {selectedRestaurant ? (
        <>
          <ResultData selectedRestaurant={selectedRestaurant} />
          <Buttons restaurantSelector={restaurantSelector} />
        </>
      ) : (
        <LoadingData error={error} />
      )}
    </Card>
  );
};

export default SearchResult;
