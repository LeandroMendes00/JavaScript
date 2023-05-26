// For in -> Lê os índices ou chaves do objeto
//                          0        1          2
//const frutas = ['Pêra', 'Maça', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//	 console.log(frutas[i]);
// }

//for (let indice in frutas) {
//	console.log(frutras [indice]);
//}

const pessoa = {
	nome:'Luiz',
	sobrenome: 'Otávio',
	idade: 30
};

// const chave = nome;
// console.log(pessoa[chave]);
// console.log(pessoa['nome'];

for (let chave in pessoa) {
	console.log(chave, pessoa[chave]);
}
