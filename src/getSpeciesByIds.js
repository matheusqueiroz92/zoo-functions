const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const returnedSpecies = data.species.filter((element) => {
    if (ids === undefined) return [];
    if (ids.find((id) => id === element.id)) return element;
    return '';
  });
  return returnedSpecies;
}

module.exports = getSpeciesByIds;
