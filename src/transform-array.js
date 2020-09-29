const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Passed argument should be an array.");
  }

  const discardNext = "--discard-next",
    discardPrev = "--discard-prev",
    doubleNext = "--double-next",
    doublePrev = "--double-prev";

  let transformedArr = [];

  for (let index = 0; index < arr.length; index++) {
    let tfArrLength = transformedArr.length;
    switch (arr[index]) {
      case discardNext:
        if (!isNullOrUndefined(arr[index + 1])) {
          index++;
        }
        break;
      case discardPrev:
        if (!isNullOrUndefined(arr[index - 1]) && arr[index - 2] !== discardNext) {
          if (isEqual(arr[index - 1], transformedArr[tfArrLength - 1])) {
            transformedArr.pop();
          }
        }
        break;
      case doubleNext:
        if (!isNullOrUndefined(arr[index + 1])) {
          transformedArr.push(arr[index + 1]);
        }
        break;
      case doublePrev:
        if (!isNullOrUndefined(arr[index - 1]) && arr[index - 2] !== discardNext) {
          transformedArr.push(arr[index - 1]);
        }
        break;
      default:
        transformedArr.push(arr[index]);
        break;
    }
  }
  return transformedArr;
};

const isNullOrUndefined = (value) => {
  return value == null || value == undefined;
};

const isEqual = (value1, value2) => {
  return value1 == value2 || isNaN(value1) && isNaN(value2);
}
