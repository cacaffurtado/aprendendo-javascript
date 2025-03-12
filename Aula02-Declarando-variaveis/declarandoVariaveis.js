// VARIÁVEIS

// let -- pode ser alterada
// const -- não pode ser alterada

const primeiroValor = 10;
const segundoValor = 20;
console.log("primeiroValor: ", primeiroValor);
console.log("segundoValor: ", segundoValor);
console.log("primeiroValor + segundoValor: ", primeiroValor + segundoValor);

const valorTotal = primeiroValor + segundoValor;
console.log("valorTotal: ",valorTotal);

// primeiroValor = 50; ------------ Uncaught TypeError: Assignment to constant variable.

let terceiroValor = 50;
console.log("terceiroValor: ", terceiroValor)

terceiroValor = 100;
console.log("terceiroValor alterado: ", terceiroValor)

// String
// "" e ''
let comunidade = "Dev Completo";
console.log("Comunidade: ", comunidade);

comunidade = 'CDC';
console.log('Comunidade', comunidade);

// `` -- Template Literals, insere variáveis dentro de string
comunidade = 'Comunidade Dev Completo';
console.log(`Participo da ${comunidade}`);

// Padrões de Declaração
// camelCase
const alunaCDC = "Carolina Furtado";

// snake_case
const aluna_CDC = "Carolina Furtado";

// const $x = '';
// const _x = '';

// let x = 10;
// x = 'dez';