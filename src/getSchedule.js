const data = require('../data/zoo_data');

const cronograma = {
  Tuesday: { officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'] },
  Wednesday: { officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'] },
  Thursday: { officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'] },
  Friday: { officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'] },
  Saturday: { officeHour: 'Open from 8am until 10pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs',
      'snakes', 'elephants'] },
  Sunday: { officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'] },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const days = Object.keys(cronograma);
const mapAnimals = data.species.map((element) => element.name);

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (mapAnimals.includes(scheduleTarget)) {
    return (data.species.find((element) => scheduleTarget === element.name)).availability;
  }
  if (!scheduleTarget || !days.includes(scheduleTarget)) return cronograma;
  if (scheduleTarget === 'Monday') {
    const objMonday = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
    return objMonday;
  }
  const { open, close } = data.hours[scheduleTarget];
  const disponibility = `Open from ${open}am until ${close}pm`;
  const exhibition = data.species.filter((element) => element.availability
    .includes(scheduleTarget)).map((animal) => animal.name);
  const objDay = {};
  objDay[scheduleTarget] = { officeHour: disponibility, exhibition };
  return objDay;
}

module.exports = getSchedule;
