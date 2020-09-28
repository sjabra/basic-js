const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined || date == null) {
    return "Unable to determine the time of year!";
  }

  if (!date instanceof Date || !date.getTime()) {
    throw new Error("Passed argument is not a date");
  }

  let monthNumber = date.getMonth();

  if (monthNumber >= 2 && monthNumber <= 4) {
    return "spring";
  } else if (monthNumber >= 5 && monthNumber <= 7) {
    return "summer";
  } else if (monthNumber >= 8 && monthNumber <= 10) {
    return "autumn";
  } else {
    return "winter";
  }
};
