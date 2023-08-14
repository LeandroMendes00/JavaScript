/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
// const produto = {nome: 'produto', preco: 1.8};
// const caneca = {
//     ...produto,
//     material: 'porcelana'
// };

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);

// const produto = {nome: 'produto', preco: 1.8};
// // const caneca = Object.assign({}, produto, { material: 'porcelana'});
// Object.freeze(produto);
// produto.nome= 'Outro nome';
// const caneca = { nome: produto.nome, preco: produto.preco};
// console.log(produto);

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);

// // const produto = {nome: 'produto', preco: 1.8};
// // Object.defineProperty(produto, 'nome', {
// //     writable: false,
// //     configurable: false,
// //     value: 'Qualquer outra coisa'
// // });
// // console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// // // produto.nome = 'Outra coisa';
// // // delete produto.preco;
// // console.log(produto);

// const produto = {nome: 'produto', preco: 1.8, material: 'porcelana'};
// console.log(Object.entries/*values*/(produto));

const produto = { nome: 'produto', preco: 1.8, material: 'porcelna'} ;

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}