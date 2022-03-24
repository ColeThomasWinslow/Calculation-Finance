import React from "react";
import MortgageCalc from "../../icons/CalcMortgage.png";
import CalcLoan from "../../icons/CalcLoan.png";
import CalcImg from "../../icons/CalcImg.svg";
function CalculatorPreviews() {
  const Previews = [
    {
      id: 1,
      title: "Mortgage Calculator",
      img: MortgageCalc,
      description:
        "Tool to estimate monthly mortgage payments with taxes, insurance, PMI, HOA fees & more.",
    },
    {
      id: 2,
      title: "Savings Calculator",
      img: CalcLoan,
      description:
        "Tool to determine how much your money can grow over time. Calculate interest growth with your savings accounts.",
    },
    {
      id: 3,
      title: "Loan Calculator",
      img: CalcLoan,
      description:
        "Tool for calculations of common loan types such as mortgages, auto loans, student loans, or personal loans. Get your monthly payment.",
    },
  ];
  return (
    <div className="PageCont">
      <div className="PrevCont">
        {Previews.map((preview) => {
          return (
            <div key={preview.id}>
              <img src={preview.img} alt={preview.id} className="PhoneImg" />
              <div className="CalcIcon">
                <img src={CalcImg} alt="Calculator" />
              </div>
              <p className="TitleBox">{preview.title}</p>
              <p className="Description">{preview.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalculatorPreviews;
