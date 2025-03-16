/*
    DESESTRUTURAÇÃO:
    forma de extrair dados de arrays e objetos e alocá-los em variáveis.
*/

/* Arrays */
const casais = [["Beatriz", "Victor"], ["Carolina", "Davi"]];

// não é um array! mas a criação de 3 variáveis.
const [casal1, casal2] = casais;
const [[nome1, nome2], [nome3, nome4]] = casais;

console.log(`O 1º casal é formado por ${casal1} e o 2º por ${casal2}`);
console.log(`${nome1} e ${nome3} são irmãs.`);

console.log("----------------------------------------------");

/* Objetos */
const pessoa = {
    nome: "Ana",
    sobrenome: "Carolina",
    familia: ["Beatriz", "Victor", "Davi"]
};

const {nome: primeiroNome, sobrenome: segundoNome, familia: [irma, cunhado, namorado]} = pessoa;
console.log(`
    Nome: ${primeiroNome} ${segundoNome},
    Irmã: ${irma},
    Cunhado: ${cunhado},
    Namorado: ${namorado}.    
`);

