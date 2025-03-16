/* ARROW FUNCTIONS */

/* 
    'var' das funções. NÃO INDICADO!
*/

// function calcularSoma(a, b){
//     return a + b;
// }

/* 
    Função limitada a uma variável. INDICADA!
*/

// const calcularSoma = function(a, b){
//     return a + b;
// }

/* 
    Para uma FUNÇÃO que irá ocupar somente 1 linha, retiramos:
    - a palavra 'function';
    - as chaves {};
    - a palavra 'return'.
*/
const calcularSoma = (a, b) =>  a + b ;

let a = 10;
let b = 20;
const resultadoSoma = calcularSoma(a, b);

console.log(`O resultado da soma de ${a} e ${b} é ${resultadoSoma}`);

console.log("--------------------------------------");

/* 
    Para uma FUNÇÃO que com apenas 1 parâmetro, retiramos os parênteses.
*/
const imprimir = impressao => console.log(impressao);
imprimir("opa, mundo!");