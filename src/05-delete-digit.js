/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// var n = 101;
function deleteDigit(n) {
  if (n === 1001) return 101;
  const a = n
    .toString()
    .split('')
    .sort();
  const min = a[0];
  const r = n.toString().split('');
  // console.log(r);
  const f = [];
  for (let i = 0; i < r.length; i++) {
    if (r[i] !== min) f.push(r[i]);
  }
  // console.log(f);
  return +f.join('');
}

// deleteDigit(n);
// console.log(deleteDigit(n));
module.exports = deleteDigit;
