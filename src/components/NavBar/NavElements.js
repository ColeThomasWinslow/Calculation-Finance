import React from "react";
import Mortgage from "../../icons/House.svg";
import Savings from "../../icons/Savings.svg";

import Loan from "../../icons/Loan.svg";
import { Link } from "react-router-dom";
function NavElements() {
  return (
    <div className="NavElements">
      <Link to="/Mortgage">
        <img src={Mortgage} alt="Mortgage" className="navImg" />
        <span>Mortgage Calculator</span>
      </Link>
      <Link to="/Savings">
        <img src={Savings} alt="Mortgage" className="navImg" />
        <span>Savings Calculator</span>
      </Link>
      <Link to="/Loan">
        <img src={Loan} alt="Loan" className="navImg" />
        <span>Loan Calculator</span>
      </Link>
    </div>
  );
}

export default NavElements;
