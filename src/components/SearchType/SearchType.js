import React from "react";
import Container from "../Container/Container";
import Card from "../Card/Card";

const SearchType = (props) => {
  const { setSearchType, updatedPosition } = props;

  const showPosition = (position) => {
    updatedPosition({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    setSearchType("coordinates");
  }

  return (
    <Container>
      <Card onClick={() => setSearchType("city")}>
        <img src="/images/City.svg" alt="City Illustration" />
        <h3>Search by city</h3>
        <p>
          Traveling soon? Planning tomorro's out-of-town trip? Enter the city
          you're interested in and go.
        </p>
      </Card>
      <Card onClick={getLocation}>
        <img src="/images/Nearby.svg" alt="GPS Illustration" />
        <h3>Search nearby</h3>
        <p>
          Hungry and want to check out what’s nearby FAST? Share your location
          with us and we’ll serve up whats close.
        </p>
      </Card>
    </Container>
  );
};

export default SearchType;
