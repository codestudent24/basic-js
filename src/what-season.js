const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
console.dir('argument: ' + date + ' type ' + typeof date)
if (typeof date !== 'object') {
  console.dir('argument is not instance of Date (invalid date)')
  throw new Error('Invalid date!')
}
const dateArray = [date.getDay(), date.getMonth()]
console.dir(typeof date !== 'object')

if (dateArray[0] > 31 || dateArray[1] > 11) {
  throw new Error('Invalid date!')
}
switch(dateArray[1]) {
  case 0:
  case 1: console.dir('result ' + dateArray[1] + ' winter');
  return 'winter';
  case 2:
  case 3:
  case 4: console.dir('result ' + dateArray[1] + ' spring');
  return 'spring';
  case 5:
  case 6:
  case 7: console.dir('result ' + dateArray[1] + ' summer');
  return 'summer';
  case 8:
  case 9:
  case 10: console.dir('result ' + dateArray[1] + ' autumn');
  return 'autumn';
  case 11:
  console.dir('result ' + dateArray[1] + ' winter');
  return 'winter';
  default: console.dir('Invalid date!');
  return 'Invalid date!';
}
}

module.exports = {
  getSeason
};
