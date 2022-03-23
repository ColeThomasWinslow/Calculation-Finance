import React from "react";
import { Link } from "react-router-dom";
import CFLogo from "../../icons/CalculationFinanceLogo.svg";
function Logo() {
  return (
    <div className="Logo">
      <Link to="/">
        <img width="150px" src={CFLogo} alt="Logo" />
      </Link>
    </div>
  );
}

export default Logo;
