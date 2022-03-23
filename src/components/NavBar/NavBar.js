import React from "react";
import Logo from "./Logo";
import NavElements from "./NavElements";
import Search from "./Search";

function NavBar() {
  return (
    <div className="Nav">
      <div className="NavTop">
        <Logo />
        <Search />
      </div>
      <div className="NavBottom">
        <NavElements />
      </div>
    </div>
  );
}

export default NavBar;
