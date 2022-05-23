const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  // Procura a espécie utilizando o find
  const findAnimal = data.species.find((element) => element.name === animal);
  // Mapeia as idades da espécie encontrada utilizando o map
  const ageAnimals = findAnimal.residents.map((element) => element.age);
  // Verifica as idades, comparando se cada elemento do array é >= ao parâmetro age
  const verifyAges = ageAnimals.every((element) => element >= age);
  // Retorna 'true' se todas as idades forem >= ao parâmetro age ou 'false' caso contrário
  return verifyAges;
}
module.exports = getAnimalsOlderThan;
