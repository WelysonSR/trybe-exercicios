let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

console.log("----");

let resultado = 0;
for (let i = 0; i < numbers.length; i += 1) {

    resultado += numbers[i];
}
console.log(resultado);

console.log("----");

resultado = 0;
for (let i = 0; i < numbers.length; i += 1) {

    resultado += numbers[i] / numbers.length;
}
console.log(resultado);

console.log("----");

if (resultado <= 20) {
    console.log("valor menor ou igual a 20");
} else {
    console.log("valor maior que 20");
}

console.log("----");

let numero = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
    if (numero < numbers[i]) {
        numero = numbers[i];
    }
}
console.log(numero);

console.log("----");

let impares = [];
let quant = 0;
for (let i = 0; i < numbers.length; i += 1) {
    let valor = numbers[i] % 2;
    if (!(valor === 0)) {
        impares.push(numbers[i])
        quant += 1;
    }
}
if (!(quant === 0)) {
    console.log('São ' + quant + ' que são ' + impares);
} else {
    console.log('Nenhum valor ímpar encontrado');
}

console.log("----");

numero = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
    if (numero > numbers[i]) {
        numero = numbers[i];
    }
}
console.log(numero);

console.log("----");

let contador = [];
for (let i = 1; i <= 25; i += 1) {
    contador.push(i);
}
console.log(contador);

console.log("----");

let divisor = [];
for (let i = 0; i < contador.length; i += 1) {
    let valor = contador[i] / 2;
    divisor.push(valor);
}
console.log(divisor);