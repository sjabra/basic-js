const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let reducer = (count, arr) => {
    return count + arr.filter((item) => item == "^^").length;
  };
  return matrix.reduce(reducer, 0);
};