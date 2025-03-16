/* MÉTODO FOR EACH */

const notasFinais = [
    {nome: "Carolina", nota: 9},
    {nome: "Davi", nota: 4},
    {nome: "Pedro", nota: 7},
    {nome: "Beatriz", nota: 2},
    {nome: "Isabela", nota: 8}    
]

/*
    Loops:
    - for
    - for of
*/

// for(let i = 0; i < notasFinais.length; i++){
//     if(notasFinais[i].nota >= 7){
//         console.log(`${notasFinais[i].nome} foi aprovado(a) com ${notasFinais[i].nota}!`);
//     } else {
//         console.log(`${notasFinais[i].nome} foi reprovado(a) com ${notasFinais[i].nota}!`);
//     }
// }

// for (let aluno of notasFinais){
    // if(aluno.nota >=7){
    //     console.log(`${aluno.nome} foi aprovado(a) com ${aluno.nota}!`);
    // } else {
    //     console.log(`${aluno.nome} foi reprovado(a) com ${aluno.nota}!`);
    // }
// }

/*
    Método (diretamente do array):
    - for each
*/

notasFinais.forEach( (aluno) => {
    if(aluno.nota >=7){
        console.log(`${aluno.nome} foi aprovado(a) com ${aluno.nota}!`);
    } else {
        console.log(`${aluno.nome} foi reprovado(a) com ${aluno.nota}!`);
    } 
});