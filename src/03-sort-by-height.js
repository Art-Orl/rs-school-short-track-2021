/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
// let arr = [4, 2, 9, 11, 2, 16];
function sortByHeight(arr) {
  const arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) arr1.push([i]);
  }
  const arr2 = arr.sort((a, b) => a - b).slice(arr1.length);
  for (let j = 0; j < arr1.length; j++) {
    arr2.splice(arr1[j], 0, -1);
  }
  return arr2;
}
// console.log(sortByHeight(arr));
module.exports = sortByHeight;
