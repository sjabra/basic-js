const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const reducer = (secretTeamName, teamMemberName) => {
    if (typeof teamMemberName == "string") {
      secretTeamName = secretTeamName + teamMemberName.trim().toUpperCase()[0];
    }
    return secretTeamName;
  };

  let secretTeamName = members.reduce(reducer, "").split("").sort().join("");

  if (!secretTeamName) {
    return false;
  }

  return secretTeamName;
};
