const a = 5;
const b = 2;
let operador = 'módulo';
let resultado = null;

if(operador === 'adição'){
    resultado = a + b;
}else if(operador === 'subtração'){
    resultado = a - b;
}else if(operador === 'multiplicação'){
    resultado = a * b;
}else if(operador === 'divisão'){
    resultado = a / b;
}else if(operador === 'módulo'){
    resultado = a % b;
}

console.log(resultado);