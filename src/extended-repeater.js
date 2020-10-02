const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const additionSeparator = options.additionSeparator || "|";
  const additionStrArr = repeatStr(options.addition, options.additionRepeatTimes)
  const additionRepeated = additionStrArr.join(additionSeparator) || "";

  const separator = options.separator || "+";
  const strArr = repeatStr(str + additionRepeated, options.repeatTimes)
  return strArr.join(separator);
};

function repeatStr(str, repeatTimes = 1) {
  let strArr = [];
  if (typeof str !== "undefined") {
    for (let index = 0; index < repeatTimes; index++) {
      strArr.push(String(str));
    }
  }
  return strArr;
}
