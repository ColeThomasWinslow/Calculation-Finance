import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../../icons/Search.svg";
function Search() {
  return (
    <div className="SearchCont">
      <div className="SearchBox">
        <img src={SearchIcon} alt="Search" />
        <input placeholder="Search" /> <Link to="/Blog">Blog</Link>
      </div>
    </div>
  );
}

export default Search;
