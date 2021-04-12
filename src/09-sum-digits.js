/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const f = n.toString().split('');
  let sum = 0;
  for (let i = 0; i < f.length; i++) {
    sum += +f[i];
  }
  if (sum.toString().length === 1) return sum;
  if (sum.toString().length > 1) {
    const m = sum.toString().split('');
    let sum1 = 0;
    for (let j = 0; j < m.length; j++) {
      sum1 += +m[j];
    }
    return sum1;
  }
  return sum;
}
module.exports = getSumOfDigits;
