import React from "react";
import SearchIcon from "../../icons/Search.svg";
function Search() {
  return (
    <div className="SearchCont">
      <div className="SearchBox">
        <img src={SearchIcon} alt="Search" />
        <input placeholder="Search" /> <a href="/">Blog</a>
      </div>
    </div>
  );
}

export default Search;
