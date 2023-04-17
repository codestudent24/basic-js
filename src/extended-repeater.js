const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
//  console.dir('str ' + str)
//  console.dir('options ' + Object.keys(options))
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (options.addition === null) options.addition = 'null';

  const string = [];
  for (let i=0; i<options.repeatTimes; i++) {
    const substring = [];
    for (let j=0; j<options.additionRepeatTimes; j++) {
      substring.push(options.addition)
    }
    string[i] = str + substring.join(options.additionSeparator);
  }

  const result = string.join(options.separator)
//  console.dir ('result ' + result)
  return result;
}

module.exports = {
  repeater
};
