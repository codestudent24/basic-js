const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  console.dir(members)
  if (!Array.isArray(members)) return false;

  const names=[];
  for (let i=0; i<members.length; i++) {
    if (typeof members[i] === 'string') {
      names.push(members[i].trim().toLocaleUpperCase()[0])
    } else if (Array.isArray(members[i])) {
      continue;
    } else if (typeof members[i] === 'object' && members[i] != null && !members[i] instanceof Set) {
      console.dir('object is ' + members[i])
      names.push(members[i][0].trim().toLocaleUpperCase()[0])
    }
  }
  const result = names.sort().join('');
  console.dir('result ' + result)
  return result;
}

module.exports = {
  createDreamTeam
};
