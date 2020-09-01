import React from "react";
import styles from "./SearchForm.module.scss";

const SearchForm = (props) => {
  const { handleSearch, handleChange } = props;
  return (
    <form onSubmit={handleSearch}>
      <input onChange={handleChange} placeholder="Enter a city"></input>
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
