// 	         0123456…..
//const nome = 'Myllene Ramos';

// for (let i = 0; i <nome.length; i++) {
//	 console.log(nome[i]);
// }

// for (let i in nome) {
//	 console.log(nome[i]);
// }

const pessoa = {	
	nome: 'Leandro',
    sobrenome: 'Alberto'
};

for (let chave in pessoa) {
	console.log(chave, pessoa[chave]);
}

// nome.forEach(function(valor, índice, array){
// 	console.log(valor, índice, array);
// });

// For clásico - Geralmente com iterável (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em s1 (iteráveis, arrays ou strings)
