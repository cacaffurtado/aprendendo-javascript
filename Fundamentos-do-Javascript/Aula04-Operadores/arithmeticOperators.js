// OPERADORES ARITMÉTICOS

// Salário
const salario = 5000;
const valeAlimentação = 500;
console.log("Meu salário é (com VA) de", salario + valeAlimentação);

const salarioBruto = 7000;
const impostos = 2000;
console.log('Meu salário líquido é de', salarioBruto - impostos);

console.log('---------------------------------------------')

// Aniversário da Cacá
const valorPessoa = 80;
const totalConvidados = 100;
console.log('O valor total do aniversário será de', valorPessoa * totalConvidados);

const valorDJ = 1000;
console.log('O valor do DJ por pessoa será de', valorDJ / totalConvidados);

console.log('---------------------------------------------')

// Números pares e ímpares (módulo)
let numero = 10;
console.log(`O resto da divisão de ${numero} por 2 é `+ numero % 2);
console.log(`Logo, ${numero} é um número par!`);
console.log("");

numero = 11;
console.log(`O resto da divisão de ${numero} por 2 é `+ numero % 2);
console.log(`Logo, ${numero} é um número ímpar!`);

console.log('---------------------------------------------')