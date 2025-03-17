/* OPERADOR SPREAD */

/* Em arrays... */
const listaCaca = ["Davi", "Isabela", "Vinício"];
const listDiego = [...listaCaca, "Bruna", "Mariana"];

console.log("Lista da Cacá:", listaCaca);
console.log("Lista do Diego:", listDiego);

const listaCacaCopia = [...listaCaca];
listaCacaCopia.push("Victoria");

console.log("Cópia da lista da Cacá:", listaCacaCopia);

console.log("-------------------------------------------------------------");


/* Em objetos... */
const professor1 = {
    escola: "Master",
    materia: "Biologia",
    nome: "Mariano",
    listaDeAlunos: [...listDiego]
};

const professor2 = {
    ...professor1,
    nome: "Carla",
    listaDeAlunos: [...listaCaca]
}

console.log("Professor 1:", professor1);
console.log("Professor 2:", professor2);