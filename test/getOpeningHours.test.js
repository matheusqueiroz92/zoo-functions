const { it } = require('eslint/lib/rule-tester/rule-tester');
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {});
it('Testando se getOpeningHours é uma função', () => {
  expect(typeof getOpeningHours).toBe('function');
});
it('Testando se a função retorna um objeto se não receber nenhum parâmetro', () => {
  expect(getOpeningHours()).toEqual({
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  });
});
it('Testando se a função retorna a string correta ao receber parâmetro1', () => {
  expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
});
it('Testando se a função retorna a string correta ao receber parâmetro2', () => {
  expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
});
it('Testando se a função retorna a string correta ao receber parâmetro3', () => {
  expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
});
it('Testando se a função ao receber uma string com a hora incorreta como parâmetro retorna um erro', () => {
  const actual = '09:00-nn';
  expect(() => getOpeningHours('Sunday', actual)).toThrow('The abbreviation must be \'AM\' or \'PM\'');
});
it('Testando se a função ao receber uma string com o dia incorreto como parâmetro retorna um erro', () => {
  const actual = 'quarta-feira';
  expect(() => getOpeningHours(actual, '09:00-AM')).toThrow('The day must be valid. Example: Monday');
});
it('Testando se a função ao receber uma string com o hora incorreta como parâmetro retorna um erro', () => {
  const actual = '29:55-AM';
  expect(() => getOpeningHours('Monday', actual)).toThrow('The hour must be between 0 and 12');
});
it('Testando se a função ao receber uma string com o hora incorreta como parâmetro retorna um erro', () => {
  const actual = '08:72-AM';
  expect(() => getOpeningHours('Monday', actual)).toThrow('The minutes must be between 0 and 59');
});
