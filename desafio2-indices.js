function encontrarIndices(numeros) {
    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeros[indiceMaior]) {
            indiceMaior = i;
        }
        if (numeros[i] < numeros[indiceMenor]) {
            indiceMenor = i;
        }
    }

    return { indiceMaior, indiceMenor };
}

// Só executa o exemplo quando o arquivo é rodado com "node desafio2-indices.js"
if (require.main === module) {
    const numeros = [15, 3, 42, 8, -7, 23];
    const resultado = encontrarIndices(numeros);

    console.log('Array:', numeros);
    console.log('Índice do maior valor:', resultado.indiceMaior, '(valor ' + numeros[resultado.indiceMaior] + ')');
    console.log('Índice do menor valor:', resultado.indiceMenor, '(valor ' + numeros[resultado.indiceMenor] + ')');
}

module.exports = encontrarIndices;
