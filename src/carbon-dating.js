const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  }

  const sampleActivityNumber = Number(sampleActivity);
  if (isNaN(sampleActivityNumber) || !isFinite(sampleActivityNumber)) {
    return false;
  }

  if (sampleActivityNumber <= 0 || sampleActivityNumber > 15) {
    return false;
  }

  const rateConstant = 0.693 / HALF_LIFE_PERIOD;
  const dateSample = Math.log(MODERN_ACTIVITY / sampleActivityNumber) / rateConstant;
  return Math.ceil(dateSample);
};
