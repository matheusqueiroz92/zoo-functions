const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  // seu código aqui
  if (!entrants) return 0;
  const count = entrants.reduce((acc, cur) => {
    if (cur.age < 18) acc.child += 1;
    if (cur.age >= 18 && cur.age < 50) acc.adult += 1;
    if (cur.age >= 50) acc.senior += 1;
    return acc;
  }, { adult: 0, child: 0, senior: 0 });
  return count;
}
function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  // const pricesEntry = data.prices;
  // return entrants.reduce((acc, cur) => {
  //   acc.adult *= count.adult;
  //   return ;
  // }, { adult: 49.99, senior: 24.99, child: 20.99 });
}
console.log(countEntrants([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));
module.exports = { calculateEntry, countEntrants };
