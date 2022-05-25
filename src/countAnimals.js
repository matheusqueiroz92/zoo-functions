const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const allAnimals = {};
    data.species.forEach((element) => {
      (allAnimals[element.name] = element.residents.length);
    });
    return allAnimals;
  }
  const findAnimals = data.species.find((element) => element.name === animal.specie);
  if (animal.sex) {
    const filterAnimals = findAnimals.residents.filter((element) => element.sex === animal.sex);
    return filterAnimals.length;
  }
  return findAnimals.residents.length;
}

module.exports = countAnimals;
