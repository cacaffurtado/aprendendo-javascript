/*
ESCOPO
------ Serve para identificar em qual parte do código a variável está
------ sendo declarada.

HOISTING
-------- Utilizar 'let' e 'const' é uma boa prática para evitar que 
-------- varáveis sejam consideradas não definidas, como o 'var' faz.
-------- O hoisting
*/

/* Escopo global */
const x = "Variável Global";
//console.log("X é uma", x);

/* Escopo de bloco*/
if (x){
    const y = "Variável de Bloco";
    console.log("Y é uma", y);
    
    // console.log("X é uma", x); // global
    // console.log("Na função, Z é uma", z); // escopo de função
}

//console.log("Y é uma", y);
// 'y' foi declarada somente dentro da condição if, logo não funciona fora dela.

/* Escopo de função */
const função = () =>{
    const z = "Variável de Função"
    console.log("Na função, Z é uma", z);
    
    // console.log("X é uma", x); // global
    // console.log("Y é uma", y); // escopo de bloco
};

função();
// 'z' foi declarada somente dentro da função, logo não funciona fora dela.

/* Hosting */
console.log(nome); // undefined
var nome = "João";
console.log(nome); // João

// console.log(sobrenome); // ReferenceError: Cannot access 'sobrenome' before initialization
let sobrenome = "Silva";

// Funções, quando não limitadas a uma variável, podem ser iniciadas mesmo antes de serem declaradas.
saudar(); // "Olá, mundo!" 
function saudar() {
  console.log("Olá, mundo!");
}// 'var' das funções NÃO É UMA BOA PRÁTICA