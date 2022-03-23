export function RetirementCalc(
  principal,
  yearlyInterestRate,
  downPayment,
  term
) {
  // Calculate Vars
  const RemainingAmount = principal - downPayment;
  const MonthlyInterestRate = yearlyInterestRate / 12 / 100;
  const NumberOfPayments = term * 12;

  //  RM [ MIR(1 + MIR)^NP ] / [ (1 + MIR)^NP – 1]
  // Formula For Monthly Payments
  var x = Math.pow(1 + MonthlyInterestRate, NumberOfPayments);
  var monthly = (RemainingAmount * x * MonthlyInterestRate) / (x - 1);
  var Rounded = Math.round(monthly);

  return Rounded;
}
