import React from "react";
import Card from "../Card/Card";
import ResultData from "./ResultData/ResultData";
import SearchButtons from "./Buttons/Buttons";
import LoadingData from "./LoadingData/LoadingData";

const SearchResult = (props) => {
  const { selectedRestaurant, restaurantSelector } = props;

  return (
    <Card>
      {selectedRestaurant ? (
        <>
          <ResultData selectedRestaurant={selectedRestaurant} />
          <SearchButtons restaurantSelector={restaurantSelector} />
        </>
      ) : (
        <LoadingData />
      )}
    </Card>
  );
};

export default SearchResult;
