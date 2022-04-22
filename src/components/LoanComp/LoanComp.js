import React, { useState } from "react";
import { CommaGen } from "../utils/CommaGen";
import calc from "../../icons/calculator.png";
import { LoanCalc } from "./LoanCalc";

import Definitions from "./Definitions";
function LoanComp() {
  const [Principal, setPrincipal] = useState(20000);
  const [InterestRate, setInterestRate] = useState(5);
  const [Term, setTerm] = useState(5);

  return (
    <div>
      <div className="Page-title Hero ">
        <h2> Loan Calculator</h2>
        <p>
          Use this loan calculator tool for a simple calculation of your monthly
          payment along with interest paid on the loan.
        </p>
      </div>
      <div className="PageCont">
        <div className="CalcCont">
          <div className="CalcBody">
            <div className="InputCont">
              <label>Loan Amount</label>
              <input
                step="5000"
                type="number"
                value={Principal}
                onChange={(e) => setPrincipal(e.target.value)}
                id="principal"
                placeholder="Home Price"
              />
            </div>
            <div className="InputCont">
              <label>Interest Rate</label>
              <input
                step=".01"
                type="number"
                value={InterestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                id="yearlyInterestRate"
                placeholder="Interest Rate"
              />
            </div>
            <div className="InputCont">
              <label>Loan Term</label>
              <input
                step="1"
                type="number"
                value={Term}
                onChange={(e) => setTerm(e.target.value)}
                id="term"
                placeholder="Loan Term"
              />
            </div>
          </div>
          <div className="Pillar">
            <div className="PaymentOutput">
              <p>Monthly Payment:</p>
              <span id="MonthlyPayment">
                ${CommaGen(LoanCalc(Principal, InterestRate, Term))}
              </span>
            </div>{" "}
            <img src={calc} alt="House" />
          </div>
        </div>
      </div>
      <Definitions />
    </div>
  );
}

export default LoanComp;
