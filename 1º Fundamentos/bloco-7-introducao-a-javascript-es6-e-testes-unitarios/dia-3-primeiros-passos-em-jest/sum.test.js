const { sum, myRemove } = require('./sum');

describe('functio sum', () => {
    it('deve retornar o resultado da soma', () => {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
    });

    it('deve disparar um erro caso receba como parâmetro uma string', () => {
        expect(() => sum(4, "5")).toThrow();
        expect(() => sum(4, "5")).toThrow("parameters must be numbers");
    });
});

describe('function myRemove', () => {
    it('deve retornar um array removendo o item correto', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});