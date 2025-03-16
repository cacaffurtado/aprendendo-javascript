// MANIPULANDO ARRAYS

const listaDeConvidados = [
    "Davi",
    "Beatriz",
    "Pedro",
    "Raimundo",
    "Leila"
];

// Push -- adiciona no final do array
listaDeConvidados.push("Kobe"); 
console.log(listaDeConvidados);

// Pop -- remove o último item do array
listaDeConvidados.pop();
console.log(listaDeConvidados);

// Unshift -- adiciona como 1º item do array
listaDeConvidados.unshift("Kobe");
console.log(listaDeConvidados);

// Shift -- remove o 1º item do array
listaDeConvidados.shift("Kobe");
console.log(listaDeConvidados);

console.log("Victor está na lista de convidados?", listaDeConvidados.includes("Victor"));

