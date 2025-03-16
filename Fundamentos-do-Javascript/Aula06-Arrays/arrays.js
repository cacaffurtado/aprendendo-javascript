// ARRAYS

const listaDeConvidados = [
    "Davi",
    "Beatriz",
    "Pedro",
    "Raimundo",
    "Leila"
];

console.log("Lista de convidados:", listaDeConvidados);

console.log("Número de convidados:", listaDeConvidados.length);

console.log("Convidado número 1:", listaDeConvidados[0]);

console.log("Convidado número 1:", listaDeConvidados[listaDeConvidados.length - 1]);

const indiceBeatriz = listaDeConvidados.indexOf("Beatriz") + 1
console.log(`Beatriz está na posição ${indiceBeatriz} do array.`);

const arrayBeatriz = [
    "Beatriz",
    true,
    31,
    {
        profissao1: "empresária",
        profissao2: "advogada"
    }
];

console.log(arrayBeatriz);