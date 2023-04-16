const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    const links = this.chain.split('~~');
    return this.chain.split('~~').length;
  },

  addLink(value) {
    if (this.chain) {
      this.chain+=`~~( ${value} )`
    } else {
      this.chain = `( ${value} )`;
    }
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || parseInt(position, 10) !== position) {
      this.chain=null;
      throw new Error ("You can't remove incorrect link!")
    }
    let textArr = this.chain.split('~~');
    if (position > textArr.length || position < 1) {
      this.chain = null;
      throw new Error ("You can't remove incorrect link!");
    }
    for (let i=position-1; i<textArr.length-1; i++) {
      textArr[i] = textArr[i+1] || '';
  }
  textArr.pop();
    this.chain = textArr.join('~~');
    return this;
  },

  reverseChain() {
    if (this.chain) {
      this.chain = this.chain.split('~~').reverse().join('~~');
    }
    return this;
  },

  finishChain() {
    const result = this.chain;
    this.chain=null;
    return result;
  }
};

module.exports = {
  chainMaker
};
