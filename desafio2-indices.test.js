const encontrarIndices = require('./desafio2-indices');

describe('Desafio 2 - Índices do maior e do menor valor', () => {
    test('deve encontrar os índices do maior e do menor valor', () => {
        expect(encontrarIndices([15, 3, 42, 8, -7, 23])).toEqual({ indiceMaior: 2, indiceMenor: 4 });
    });

    test('deve funcionar quando o maior está no início e o menor no fim', () => {
        expect(encontrarIndices([100, 50, 20, 1])).toEqual({ indiceMaior: 0, indiceMenor: 3 });
    });

    test('deve funcionar quando o menor está no início e o maior no fim', () => {
        expect(encontrarIndices([1, 20, 50, 100])).toEqual({ indiceMaior: 3, indiceMenor: 0 });
    });

    test('deve retornar índice 0 para os dois quando o array tem um só elemento', () => {
        expect(encontrarIndices([7])).toEqual({ indiceMaior: 0, indiceMenor: 0 });
    });
});
