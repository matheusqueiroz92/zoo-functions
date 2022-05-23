const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const returnedEmployee = data.employees
    .find((element) => employeeName === element.firstName || employeeName === element.lastName);
  if (employeeName === undefined) return {};
  return returnedEmployee;
}

module.exports = getEmployeeByName;
