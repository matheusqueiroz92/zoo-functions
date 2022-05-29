const data = require('../data/zoo_data');

function getEmployeesCoverage(objFound) {
  // seu código aqui
  const founds = data.employees.map((element) => element.firstName);
  if (!objFound) {
    return founds;
  }
}
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
