/*
TIPOS DE DADOS - PRIMITIVOS

- Oferece tipagem dinâmica

*/

// Number
const idade = 22;

// String
const nome = "Carolina"

// Boolean
let cabeloLoiro = true;
console.log(`${nome} tem cabelo loiro?`, cabeloLoiro)

console.log("Muitos anos depois...")

cabeloLoiro = false;
console.log(`${nome} tem cabelo loiro?`, cabeloLoiro)

// Undefined -- adicionar valor a variável
// desempregada
let profissao;
console.log(profissao);
//empregada
profissao = "QA";
console.log(`A profissão de ${nome} é`, profissao);

// Null -- tirar valor de variável
let carro = "Fusca";
console.log(`Hoje, o carro de ${nome} é um`, carro);

console.log("Muitos anos depois...")

carro = "Honda Civic";
console.log(`Agora, o carro de ${nome} é um`, carro);

console.log("Perdeu o emprego...")

carro = null;
console.log(`O carro de ${nome} é um`, carro);

// Symbol -- para variáveis imutáveis

// BigInt -- para números muito grandes, que o number não pode armazenar