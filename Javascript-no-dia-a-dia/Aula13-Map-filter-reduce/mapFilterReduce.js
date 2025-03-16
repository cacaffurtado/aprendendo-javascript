/* 
    MÉTODOS:
    - MAP
    - FILTER
    - REDUCE
*/

const distaciaEmMetros = [1000, 1500, 2000, 2500, 3000, 3500, 4000];

/* MAP */

// distaciaEmMetros.map(distancia => {
//     distaciaEmKM = distancia / 1000;
//     console.log(`A distância é de ${distaciaEmKM}km.`)
//     return distaciaEmKM;
// });

const distanciasEmKM = distaciaEmMetros.map(distancia => distancia / 1000 );
console.log("Distâncias em KM:", distanciasEmKM); // array com valores em KM.

console.log("------------------------------------------------------");

/* FILTER */
// const itensFiltrados = distaciaEmMetros.filter(distancia => {
//     if (distancia > 2000) return distancia;
// });

const itensFiltrados = distaciaEmMetros.filter(distancia => distancia > 2000); // em casos de que só temos uma expressão para ser analisada.

console.log("Distancias maiores que 2000m:", itensFiltrados)

console.log("------------------------------------------------------");

/* REDUCE */
const somaDasDistancias = distaciaEmMetros.reduce((acc, distancia) => {
    return acc + distancia;
}, 0);

console.log("A soma das distâncias é", somaDasDistancias);


/* Outros parâmetros */
// const itensFiltrados = distaciaEmMetros.filter((distancia, index, arrayOriginal) => {
//     console.log(`A distância ${distancia} está na posição ${index+1}.`);
//     console.log(`Array original: ${arrayOriginal}`);
//     console.log("------------------------");
// });