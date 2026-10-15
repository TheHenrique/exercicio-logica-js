function somarMultiplos(limite) {
    let soma = 0;

    for (let i = 1; i < limite; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            soma += i;
        }
    }

    return soma;
}

let somaExemplo = 0;
for (let i = 1; i < 10; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        somaExemplo += i;
    }
}
console.log('Exemplo do enunciado (3 ou 5 abaixo de 10):', somaExemplo);

console.log('Soma dos múltiplos de 5 ou 7 abaixo de 1000:', somarMultiplos(1000));
