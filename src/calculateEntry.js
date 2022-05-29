const data = require('../data/zoo_data');

// const arr = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

// const entries = Object.entries(arr);
// const keys = Object.keys(arr);
// const values = Object.values(arr);

// console.log(entries);
// console.log(keys);
// console.log(values);

const count1 = (acc1, cur1) => {
  const obj1 = acc1;
  if (cur1.age < 18) {
    obj1.child += 1;
  }
};
const count2 = (acc2, cur2) => {
  const obj2 = acc2;
  if (cur2.age >= 18 && cur2.age < 50) {
    obj2.adult += 1;
  }
};
const count3 = (acc3, cur3) => {
  const obj3 = acc3;
  if (cur3.age >= 50) {
    obj3.senior += 1;
  }
};

function countEntrants(entrants) {
  // seu código aqui
  if (!entrants) return 0;
  const count = entrants.reduce((acc, cur) => {
    // if (cur.age < 18) acc.child += 1;
    count1(acc, cur);
    // if (cur.age >= 18 && cur.age < 50) acc.adult += 1;
    count2(acc, cur);
    // if (cur.age >= 50) acc.senior += 1;
    count3(acc, cur);
    return acc;
  }, { adult: 0, child: 0, senior: 0 });
  return count;
}
function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const pricesEntry = countEntrants(entrants);
  const openObj = [pricesEntry];
  const calculate = openObj.reduce((acc, cur) => {
    acc.adult *= cur.adult;
    acc.child *= cur.child;
    acc.senior *= cur.senior;
    return acc;
  }, { adult: 49.99, senior: 24.99, child: 20.99 });
  const result = Object.values(calculate);
  return result.reduce((acc, cur) => acc + cur);
}
console.log(countEntrants([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));
console.log(calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));
module.exports = { calculateEntry, countEntrants };
