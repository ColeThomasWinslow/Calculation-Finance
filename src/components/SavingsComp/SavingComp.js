import React, { useState } from "react";
import { CommaGen } from "../utils/CommaGen";
import { SavingsCalc } from "./SavingsCalc";
import FadeIn from "react-fade-in/lib/FadeIn";
import Definitions from "./Definitions";
function SavingComp() {
  const [Principle, setPrinciple] = useState(0);
  const [Frequency, setFrequency] = useState("7");
  const [InterestRate, setInterestRate] = useState(1.35);
  const [Contribution, setContribution] = useState(50);
  const [Term, setTerm] = useState(1);

  return (
    <div>
      <div className="Page-title Hero HeroHeader ">
        <FadeIn>
          <h2>Savings Calculator</h2>
          <p>
            Tool to determine how much your money can grow over time. Calculate
            interest growth with your savings accounts.
          </p>
        </FadeIn>
      </div>
      <div className="PageCont">
        <div className="CalcCont">
          <div className="CalcBody">
            <div className="InputCont">
              <label>Principal</label>
              <input
                step="5000"
                type="number"
                value={Principle}
                onChange={(e) => setPrinciple(e.target.value)}
                id="Principle"
                placeholder="Home Price"
              />
            </div>
            <div className="InputCont">
              <label>Contribution ($)</label>
              <input
                step="1"
                type="number"
                value={Contribution}
                onChange={(e) => setContribution(e.target.value)}
                id="term"
                placeholder="Loan Term"
              />
            </div>
            <div className="InputCont">
              <label>Frequency</label>
              <select
                onChange={(e) => setFrequency(e.target.value)}
                id="frequency"
              >
                <option value="7">Weekly</option>
                <option value="14">Bi-weekly</option>
                <option value="30">Monthly</option>
                <option value="91">Quarterly</option>
                <option value="364">Annually</option>
              </select>
            </div>
            <div className="InputCont">
              <label>Time Frame (yrs) </label>
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
          </div>
          <div className="PaymentOutput">
            <p>Results:</p>
            <span id="MonthlyPayment">
              $
              {CommaGen(
                SavingsCalc(
                  InterestRate,
                  Contribution,
                  Principle,
                  Term,
                  Frequency
                )
              )}
            </span>
          </div>
        </div>
      </div>
      <Definitions />
    </div>
  );
}

export default SavingComp;
