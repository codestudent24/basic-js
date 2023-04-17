const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error ('Incorrect arguments!')
    }
    const text = message.toLocaleUpperCase();
//    console.dir('text ' + text)
//    console.dir('key ' + key)
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const offence = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
      K: 10,
      L: 11,
      M: 12,
      N: 13,
      O: 14,
      P: 15,
      Q: 16,
      R: 17,
      S: 18,
      T: 19,
      U: 20,
      V: 21,
      W: 22,
      X: 23,
      Y: 24,
      Z: 25
    }

    let fullKey = '';
    let j = 0;
    for (let i=0; i<text.length; i++) {
      if (text[i] == ' ') {
        fullKey = fullKey + 'A';
      } else {
        fullKey = fullKey + key[j%key.length];
        j++;
      }
    }
    fullKey = fullKey.toLocaleUpperCase();
//    console.dir('fullKey ' + fullKey)

    let result = '';
    for (let i=0; i<text.length; i++) {
      if (text[i].charCodeAt(0) > 64 && text[i].charCodeAt(0) <91) {
        result += alphabet[(offence[text[i]] + offence[fullKey[i]]) % 26];
      } else {
        result = result + text[i];
      }
    }
//    console.dir('result ' + result);
    return result;
  }

  decrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error ('Incorrect arguments!')
    }
    const text = message.toLocaleUpperCase();
//    console.dir('text ' + text)
//    console.dir('key ' + key)
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const offence = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
      K: 10,
      L: 11,
      M: 12,
      N: 13,
      O: 14,
      P: 15,
      Q: 16,
      R: 17,
      S: 18,
      T: 19,
      U: 20,
      V: 21,
      W: 22,
      X: 23,
      Y: 24,
      Z: 25
    }

    let fullKey = '';
    let j = 0;
    for (let i=0; i<text.length; i++) {
      if (text[i] == ' ') {
        fullKey = fullKey + 'A';
      } else {
        fullKey = fullKey + key[j%key.length];
        j++;
      }
    }
    fullKey = fullKey.toLocaleUpperCase();
//    console.dir('fullKey ' + fullKey)

    let result = '';
    for (let i=0; i<text.length; i++) {
      if (text[i].charCodeAt(0) > 64 && text[i].charCodeAt(0) <91) {
        result += alphabet[(offence[text[i]] - offence[fullKey[i]] + 26) % 26];
      } else {
        result = result + text[i];
      }
    }
//    console.dir('result ' + result);
    return result;
  }
}

//const v= new VigenereCipheringMachine();
//v.encrypt('attack at dawn!', 'alphonse')

module.exports = {
  VigenereCipheringMachine
};
