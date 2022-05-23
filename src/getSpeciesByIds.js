const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species.filter((element) => {
    if (ids === undefined) return [];
    if (ids.find((id) => id === element.id)) return element;
    return '';
  });
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '89be95b3-47e4-4c5b-b687-1fabf2afa274'));

module.exports = getSpeciesByIds;
