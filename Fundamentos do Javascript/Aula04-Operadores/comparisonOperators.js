// OPERADORES DE COMPARAÇÃO

const idadeJoana = 23;
const idadeCaca = 22;

console.log("Joana é mais nova que Cacá?", idadeCaca > idadeJoana);
console.log("Joana é mais velha que Cacá?", idadeCaca < idadeJoana);

console.log('---------------------------------------------')

console.log("A idade de Joana é menor ou igual que a de Cacá?", idadeJoana <= idadeCaca);

const maioridade = 18;

console.log("Cacá é maior de idade?", idadeCaca >= maioridade);

console.log('---------------------------------------------')

const x = 10;
const y = 20;
const z = "10";

console.log(`O número ${x} é igual ao número ${y}?`, x === y)

// Sempre optar por operadores ESTRITOS ao falar de igualdade e desigualdade. MAIS SEGURO!

// Operador estrito.
// igualdade
console.log(`O número ${x} é igual ao número ${z}?`, x === z)
// desigualdade
console.log(`O número ${x} é diferente ao número ${y}?`, x !== y)
console.log(`O número ${x} é diferente ao número ${z}?`, x !== z)

// Operador frouxo. Compara string e número
console.log(`O número ${x} é igual ao número ${z}?`, x == z)
// desigualdade
console.log(`O número ${x} é diferente ao número ${y}?`, x !== y)
console.log(`O número ${x} é diferente ao número ${z}?`, x != z)

console.log('---------------------------------------------')