/* 
    VALORES TRUTHY E FALSY
    - quando valores são convertidos para booleano -> Boolean(valor).
    - diferentes de true e false
    - falsy -> 0 (único número classificado como falsy), "", undefined, null, Nan
    - truthy -> todos os número, com execeção do 0.

*/

/* falsy */
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));

// console.log("-------------------------------------------------");

/* truthy */
// const numero = 1;
// const string = "Opa, mundo";
// const objeto = {valor1: 0, valor2: 9};
// const objeto2 = {};
// const array = [1, 2];
// const array2 = [];

// console.log("Número 1:", numero, ",", Boolean(numero));
// console.log("String:", string, ",", Boolean(string));
// console.log("Objeto:", objeto, ",", Boolean(objeto));
// console.log("Array:", array, ",", Boolean(array));
// console.log("Objeto vazio:", objeto2, ",", Boolean(objeto2));
// console.log("Número 1:", array2, ",", Boolean(array2));

// console.log("-------------------------------------------------");

const nomes = ['Leila', 'Raimundo', '', 'Caca'];
console.log(nomes);

// const nomesFiltrados = nomes.filter((nome) => Boolean(nome)); // mesmo que...
const nomesFiltrados = nomes.filter(nome => nome);
console.log(nomesFiltrados);

console.log("-------------------------------------------------");

const x = 10;
const y = null;

if (x){
     console.log("X é um valor Truthy!");
};

// se 'y' existir
y ? console.log("Y é um valor Truthy!") : console.log("Y é um valor Falsy!");

console.log("-------------------------------------------------");

nomes.forEach( nome => {
    nome ? console.log(nome, "é um valor truthy!") : console.log("Um valor falsy!"); // mesmo que... 
    
    // if (nome){
    //     console.log(nome, "é um valor truthy!");
    // } else {
    //     console.log("Um valor falsy!");
    // };
});