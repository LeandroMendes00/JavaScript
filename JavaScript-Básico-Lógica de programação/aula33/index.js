
const pessoa = {
    nome: 'Luz',
    sobrenome : 'Miranda',
    idade: 30, 
    endereco: {
          rua: 'Av Brasi',
          numero:320
          }
};
// Atribuição via desestruturação 
//const { nome, sobrenome, idade } = pessoa;
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);
