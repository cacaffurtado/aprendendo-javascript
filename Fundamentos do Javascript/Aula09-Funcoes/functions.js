// FUNÇÕES

const imprimir = function (impressao){
    console.log(impressao);
}

imprimir("Opa, mundo!");

console.log("--------------")

const calcularSoma = function (a, b){
    return  a + b;
}

const a = 50;
const b = 30;

console.log(`${a} + ${b} = ${calcularSoma(a, b)}`);