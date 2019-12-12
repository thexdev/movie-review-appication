import React, { memo, useState } from "react";

function Search(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = event => {
    setSearchValue(event.target.value);
  };

  const searchMovie = event => {
    event.preventDefault();
    props.search(searchValue);
    setSearchValue("");
  };

  return (
    <form className="search">
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchInputChange}
      />
      <input type="submit" value="SEARCH" onClick={searchMovie} />
    </form>
  );
}

export default memo(Search);
