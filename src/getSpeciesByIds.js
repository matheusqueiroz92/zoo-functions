const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species.filter((element) => {
    if (ids === undefined) return [];
    if (ids.find((id) => id === element.id)) return element;
    return '';
  });
}

module.exports = getSpeciesByIds;
