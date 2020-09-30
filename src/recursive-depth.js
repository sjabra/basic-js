const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let innerDepth = 1;
    let actDepth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        innerDepth = this.calculateDepth(arr[i]) + 1;
        actDepth = Math.max(actDepth, innerDepth);
      }
    }
    return actDepth;
  }
};
