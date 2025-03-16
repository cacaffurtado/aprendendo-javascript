/*
TIPOS DE DADOS - OBJETOS

- Os itens presentes dentro do objeto são chamados de propriedades!

- É possível adicionar propriedas no objeto, por mais que ele seja uma variável const, pois não é um tipo de dado primitivo;

- A concatenação funciona somente com tipos de dados primitivos, ou seja, não funciona com objetos.

- Os objetos são mutáveis e passados por referência, logo, i ndependente de quantas vezes printarmos o objeto na tela, ele ocupa o mesmo espaço na memória, ou seja, vai passar por todas alterações e apresentará última atualização em todas as chamadas.

*/

const fichaDaCaca = {
    nome: "Cacá",
    idade: 22,
    profissao: "QA",
    temFilhos: false
};
console.log('Ficha da Cacá:', fichaDaCaca);

// Concatenação
console.log('Nome: ' + fichaDaCaca.nome);

// Adicionar propriedade
fichaDaCaca.carro = "Fusca";
console.log('Ficha da Cacá:', fichaDaCaca);

// Deletar propriedade
delete fichaDaCaca.carro;
console.log('Ficha da Cacá:', fichaDaCaca);
console.log('Carro: ' + fichaDaCaca.carro)

// Objeto vazio
const nome = "Davi";
const idade = 23;
const profissao = "Nutricionisa";
const temFilhos = false;

const fichaDaDavi = {
    nome,
    idade,
    profissao,
    temFilhos
};
console.log('Ficha da Cacá:', fichaDaDavi);

