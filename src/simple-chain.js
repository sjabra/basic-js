const CustomError = require("../extensions/custom-error");

let chainArr = [];

const chainMaker = {
  getLength() {
    return chainArr.length;
  },
  addLink(value) {
    if (value !== undefined) {
      value = `( ${value} )`;
    } else {
      value = "( )";
    }
    chainArr.push(`${value}`);
    return this;
  },

  removeLink(position) {
    if (position > this.getLength() - 1 || isNaN(position || position % 1 !== 0)) {
      chainArr = [];
      throw new Error("Unexpected value has been passed as a position variable.");
    }
    chainArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    chainArr = chainArr.reverse();
    return this;
  },
  finishChain() {
    const chainStr = chainArr.join("~~");
    chainArr = [];
    return chainStr;
  },
};

module.exports = chainMaker;