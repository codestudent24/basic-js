const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter =1, result = '';
  let char = str[0];
  for (let i=1; i<str.length; i++) {
    if (str[i] === char) {
      counter++;
    } else {
      result += counter===1 ? char : `${counter}${char}`;
      char = str[i];
      counter=1;
    }
    if (i === str.length - 1) {
      result += counter===1 ? char : `${counter}${char}`;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
