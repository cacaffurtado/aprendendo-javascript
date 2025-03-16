// OPERADORES LÓGICOS
// AND

console.log('Leila foi parada em uma blitz...');

const idadeLeila = 61;
const leilaPossuiCNH = true;

console.log('Leila vai ser presa?', idadeLeila >= 18 && leilaPossuiCNH === false);

console.log('---------------------------------------------');

// OR
console.log('Leila foi para a balada e pediram seu RG...');

const leilaPossuiRG = true;
console.log('Leila conseguiu comprovar que é maior de idade?', leilaPossuiRG === true || leilaPossuiCNH === true);

console.log('---------------------------------------------');

// NOT

const gostaDeBeber = true;
const leilaGostaDeBeber = !gostaDeBeber;

console.log("Leila gosta de beber?", leilaGostaDeBeber);