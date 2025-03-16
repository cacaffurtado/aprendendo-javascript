// CONDICIONAIS

const idadeArthur = 9;
const maioridade = 18;
const anosFaltantesMaioridade = maioridade - idadeArthur;

if(idadeArthur >= maioridade){
    console.log("Arthur pode dirigir!");
} else {
    console.log(`Arthur NÃO pode dirigir! Ainda faltam ${anosFaltantesMaioridade} anos.`);
}

// // Operadores Ternários
// const idadeParaIrNoInsano = 10;
// const anosFaltantesInsano = idadeParaIrNoInsano - idadeArthur;
// let anoOuAnos;
// let faltaOuFaltam;

// anosFaltantesInsano >= 2
// ? anoOuAnos = "anos"
// : anoOuAnos = "ano";

// anosFaltantesInsano >= 2
// ? faltaOuFaltam = "faltam"
// : faltaOuFaltam = "falta";

// idadeArthur >= idadeParaIrNoInsano
//     ? console.log("Arthur pode ir no Insano!")
//     : console.log(`Arthur NÃO ir no Insano! Ainda ${faltaOuFaltam} ${anosFaltantesInsano} ${anoOuAnos}.`)

console.log("----------------------------------------------------")

const idadePessoa = 1;
let faixaEtaria;

idadePessoa >= 2
? anoOuAnos = "anos"
: anoOuAnos = "ano";

if (idadePessoa >= 0 && idadePessoa <= 12){
    faixaEtaria = "uma criança";
} else if (idadePessoa >= 13 && idadePessoa <= 17){
    faixaEtaria = "um adolescente";
} else if (idadePessoa >= 18 && idadePessoa <= 25){
    faixaEtaria = "um jovem adulto";
} else if (idadePessoa >= 26 && idadePessoa <= 60){
    faixaEtaria = "um adulto";
} else {
    faixaEtaria = "um idoso";
} 

console.log(`Fulano tem ${idadePessoa} ${anoOuAnos}, logo Fulano é ${faixaEtaria}!`);

console.log("----------------------------------------------------")

const diaDaSemana = 3;
let nomeDoDia;

switch(diaDaSemana){
    case 0:
    nomeDoDia = "Domingo";
    break;

    case 1:
    nomeDoDia = "Segunda";
    break;

    case 2:
    nomeDoDia = "Terça";
    break;

    case 3:
    nomeDoDia = "Quarta";
    break;

    case 4:
    nomeDoDia = "Quinta";
    break;

    case 5:
    nomeDoDia = "Sexta";
    break;
    
    case 6:
    nomeDoDia = "Sábado";
    break;
}

console.log(`O dia da semana é ${nomeDoDia}!`)
