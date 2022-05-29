const data = require('../data/zoo_data');
// recebe o nome da espécie e retorna a sua localização 
function getSpecieByLocation(animal) {
  return (data.species.find((element) => element.name === animal.name)).location;
}
console.log(getSpecieByLocation({ name: 'penguins' }));

// recebe o nome do funcionário e retorna os animais que ele é responsável
const speciesResponsible = (nameEmployee) => data.employees
  .find((element) => element.firstName === nameEmployee.name).responsibleFor;
function getEmployeeResponsibleFor(nameEmployee) {
  return (speciesResponsible(nameEmployee));
}
console.log(getEmployeeResponsibleFor({ name: 'Nigel' }));

const getSpecie = (employee) => {
  const animal = employee.responsibleFor;
  const nameAnimals = animal.filter((id) => data.species
    .find((element) => element.id === employee.id));
  return nameAnimals;
};

const mapEmployeesFirst = data.employees.map((element) => element.firstName);
const mapEmployeesLast = data.employees.map((element) => element.lastName);
const mapEmployeesId = data.employees.map((element) => element.id);

function getEmployeesCoverage(objFound) {
  // seu código aqui
  const allEmployees = data.employees.map((element) => element);
  // const { id, fullName, species, locations } = data.employees[objFound];
  if (!objFound) {
    return allEmployees;
  }
  if (mapEmployeesFirst.includes(objFound.name) || mapEmployeesLast.includes(objFound)
    || mapEmployeesId.includes(objFound.id)) {
    return getSpecie(objFound);
  }
}
console.log(getEmployeesCoverage('Nelson'));
module.exports = getEmployeesCoverage;
