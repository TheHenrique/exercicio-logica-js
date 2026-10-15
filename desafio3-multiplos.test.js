const somarMultiplos = require('./desafio3-multiplos');

describe('Desafio 3 - Soma dos múltiplos de 5 ou 7', () => {
    test('deve retornar 156361 para os múltiplos abaixo de 1000', () => {
        expect(somarMultiplos(1000)).toBe(156361);
    });

    test('deve retornar 12 para os múltiplos abaixo de 10 (5 + 7)', () => {
        expect(somarMultiplos(10)).toBe(12);
    });

    test('não deve incluir o próprio limite na soma', () => {
        // Abaixo de 15: 5, 7, 10 e 14 = 36 (o 15 fica de fora)
        expect(somarMultiplos(15)).toBe(36);
    });

    test('deve retornar 0 quando não há múltiplos abaixo do limite', () => {
        expect(somarMultiplos(5)).toBe(0);
    });
});
