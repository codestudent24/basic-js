const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const copy = arr;
  if (!(arr instanceof Array)) throw new Error ("'arr' parameter must be an instance of the Array!");
  const newArr = [];
  for (let i=0; i<copy.length; i++) {
    switch (arr[i]) {
      case '--discard-next': if (copy[i+1]) copy[i+1]='';
      break;
      case '--discard-prev': if (copy[i-1]) {
        copy[i-1]='';
        if (newArr.length>0) newArr.pop();
      }
      break;
      case '--double-next': if (copy[i+1]) {
        newArr.push(copy[i+1]);
      }
      break;
      case '--double-prev': if (copy[i-1]) {
        newArr.push(copy[i-1]);
      }
      break;
      default: if(copy[i]) newArr.push(copy[i]);
      break;
    }
  }
  return newArr;
}

module.exports = {
  transform
};
