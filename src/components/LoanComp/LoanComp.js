import React, { useState } from "react";
import { CommaGen } from "../utils/CommaGen";
import { LoanCalc } from "./LoanCalc";
function LoanComp() {
  const [Principal, setPrincipal] = useState(300000);
  const [DownPayment, setDownPayment] = useState(60000);
  const [InterestRate, setInterestRate] = useState(4.5);
  const [Term, setTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(200);
  const [Insurance, setInsurance] = useState(100);
  return (
    <div>
      <div className="Page-title Hero ">
        <h2> Loan Calculator</h2>
        <p>
          Tool for calculations of common loan types such as mortgages, auto
          loans, student loans, or personal loans. Get your monthly payment.
        </p>
      </div>
      <div className="PageCont">
        <div className="CalcCont">
          <div className="CalcBody">
            <div className="InputCont">
              <label>Home Price</label>
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
              <label>Down Payment</label>
              <input
                type="number"
                step="1000"
                value={DownPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                id="downPayment"
                placeholder="Down Payment"
              />
            </div>
            <div>
              <label>Percent Down</label>
              <input
                disabled
                className="Down"
                value={`${Math.round((DownPayment / Principal) * 100)}%`}
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
            <div className="InputCont">
              <label>Property Taxes</label>
              <input
                step="1"
                type="number"
                value={propertyTax}
                onChange={(e) => setPropertyTax(e.target.value)}
                id="term"
                placeholder="Loan Term"
              />
            </div>
            <div className="InputCont">
              <label>Insurance</label>
              <input
                step="1"
                type="number"
                value={Insurance}
                onChange={(e) => setInsurance(e.target.value)}
                id="term"
                placeholder="Insurance"
              />
            </div>
          </div>
          <div className="PaymentOutput">
            <p>Monthly Payment:</p>
            <span id="MonthlyPayment">
              $
              {CommaGen(
                parseInt(Insurance) +
                  parseInt(propertyTax) +
                  LoanCalc(Principal, InterestRate, DownPayment, Term)
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanComp;
