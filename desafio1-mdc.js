function calcularMDC(a, b) {
    while (b !== 0) {
        const resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}

console.log('MDC de 12 e 18:', calcularMDC(12, 18));
console.log('MDC de 48 e 36:', calcularMDC(48, 36));
console.log('MDC de 17 e 5:', calcularMDC(17, 5));
