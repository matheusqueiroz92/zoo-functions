const hours = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};
const entries = Object.entries(hours);
const keys = Object.keys(hours);
const values = Object.values(hours);
entries.forEach(([key, value]) => console.log(key, value)); // [key, value] usando destructuring
keys.forEach((key) => console.log(key));
values.forEach((value) => console.log(value));
