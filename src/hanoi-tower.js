const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let hanoiTurns = Math.pow(2, disksNumber) - 1;
  return { turns : hanoiTurns, seconds : Math.floor(hanoiTurns / turnsSpeed * 3600) };
};


const calculateHanoi = (disksNumber, turnsSpeed) => {
  let hanoiTurns = Math.pow(2, disksNumber) - 1;
  return { turns : hanoiTurns, seconds : Math.floor(hanoiTurns / turnsSpeed * 3600) };
};

calculateHanoi(9, 4000);