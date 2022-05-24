const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// const msgError = throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');

function isManager(id) {
  // seu código aqui
  const verifyManager = data.employees.some((findManager) => findManager.managers.includes(id));
  return verifyManager;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const arrayResult = [];
    const returnedManager = data.employees.filter((filterManager) => filterManager.managers
      .find((findManager) => managerId === findManager));

    returnedManager.forEach((resultManager) => {
      const { firstName, lastName } = resultManager;
      arrayResult.push(`${firstName} ${lastName}`);
    });
    return arrayResult;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');
module.exports = { isManager, getRelatedEmployees };
