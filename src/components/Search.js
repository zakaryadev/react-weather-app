import React, { useState } from "react";

function Search({ setLoc }) {
  const [search, setSearch] = useState("Nukus");

  const handleChanger = (e) => {
    setSearch(e.target.value);
  };
  const handleKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setLoc(search);
      e.target.value = "";
    }
  };

  return (
    <div className="container-sm search-form">
      <form className="d-flex py-3" role="search" onKeyDown={handleKey}>
        <input
          className="form-control me-2 transparent"
          type="text"
          placeholder="Please Enter only City Name's"
          aria-label="Search"
          onChange={handleChanger}
        />
      </form>
    </div>
  );
}

export default Search;
