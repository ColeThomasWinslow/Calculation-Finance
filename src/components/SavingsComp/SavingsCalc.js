export function SavingsCalc(
  interest,
  contribution,
  principle,
  period,
  frequency
) {
  var r = parseFloat(interest) / 100 / 365,
    C = parseFloat(contribution),
    P = parseFloat(principle),
    y = parseFloat(period),
    d = 365 * y,
    n = parseFloat(frequency),
    total = P + C, //add initial contribution to account for loss of interest
    ri = 0;

  var yr = new Date().getFullYear(),
    count = 0,
    initialDeposit = true,
    z,
    zz;

  while (count++ < d) {
    z = new Date(yr, 0, count);
    zz = new Date(yr, 0, count + 1);

    if (count % n === 0) {
      if (!initialDeposit) {
        total += C;
      } else {
        initialDeposit = false;
      }
    }

    if (zz.getDate() < z.getDate()) {
      total += ri;
      ri = 0;
    }

    ri += total * r;
  }
  return total;
}
