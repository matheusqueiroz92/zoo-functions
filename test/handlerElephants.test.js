const { it } = require('eslint/lib/rule-tester/rule-tester');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função handlerElephants', () => {
    it('Testa se handlerElephants é uma função', () => {
        expect(typeof handlerElephants).toBe('function');
    });
    it('Retorna a quantidade de elefantes', () => {
        const actual = handlerElephants('count');
        const expected = 4;
        expect(actual).toBe(expected);
    });
    it('Retorna um array com a relação dos nomes de todos os elefantes', () => {
        const actual = handlerElephants('names');
        const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
        expect(actual).toEqual(expected);
    });
    it('Retorna a média de idade dos elefantes', () => {
        const actual = handlerElephants('averageAge');
        const expected = 10.5;
        expect(actual).toBe(expected);
    });
    it('Retorna a localização dos elefantes dentro do Zoológico', () => {
        const actual = handlerElephants('location');
        const expected = 'NW';
        expect(actual).toEqual(expected);
    });
    it('Retorna a popularidade dos elefantes', () => {
        const actual = handlerElephants('popularity');
        const expected = 5;
        expect(actual).toBe(expected);
    });
    it('Retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
        const actual = handlerElephants('availability');
        const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
        expect(actual).toEqual(expected);
    });
    it('Retorna undefined se passar um undefined como parametro', () => {
        const actual = handlerElephants(undefined);
        const expected = undefined;
        expect(actual).toBe(expected);
    });
    it('Retorna um Parâmetro inválido, é necessário uma string se o parâmetro passado não for uma string', () => {
        const actual = handlerElephants(1);
        const expected = 'Parâmetro inválido, é necessário uma string';
        expect(actual).toBe(expected);
    });
    it('Retorna null se o parâmetro passado for uma string que não contempla uma funcionalidade', () => {
        const actual = handlerElephants('matheus');
        const expected = null;
        expect(actual).toBe(expected);
    });
});
