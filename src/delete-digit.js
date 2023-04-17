const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n) {
  str = n.toString();
  const arr = [];
  for (let i=0; i<str.length; i++) {
    arr.push(parseInt(str.slice(0, i) + str.slice(i+1, str.length)))
  }
  let result = arr[0];
  for (let i=1; i<arr.length; i++) {
    if (arr[i]>result) result = arr[i]
  }

  return result;
}

module.exports = {
  deleteDigit
};
