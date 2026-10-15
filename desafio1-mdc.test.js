const calcularMDC = require('./desafio1-mdc');

describe('Desafio 1 - MDC entre dois números', () => {
    test('deve retornar 6 como MDC de 12 e 18', () => {
        expect(calcularMDC(12, 18)).toBe(6);
    });

    test('deve retornar 12 como MDC de 48 e 36', () => {
        expect(calcularMDC(48, 36)).toBe(12);
    });

    test('deve retornar 1 quando os números são primos entre si', () => {
        expect(calcularMDC(17, 5)).toBe(1);
    });

    test('deve retornar o próprio número quando os dois são iguais', () => {
        expect(calcularMDC(9, 9)).toBe(9);
    });

    test('deve retornar o outro número quando um deles é zero', () => {
        expect(calcularMDC(10, 0)).toBe(10);
    });
});
