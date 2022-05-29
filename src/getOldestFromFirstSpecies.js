const data = require('../data/zoo_data');

function getAnimalResponsable(id) {
  return data.employees.find((employee) => employee.id === id).responsibleFor[0];
}

function findGroupAnimal(id) {
  return data.species.find((specie) => specie.id === getAnimalResponsable(id));
}

function getAllAnimal(id) {
  const array = [];
  findGroupAnimal(id).residents.forEach((element) => array.push(element));
  return array;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const oldest = getAllAnimal(id).sort((animalA, animalB) => animalB.age - animalA.age)[0];
  const { name, sex, age } = oldest;
  return [name, sex, age];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
