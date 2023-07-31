// Factory functions / Constructor functions / Classes
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 2;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
};
//  console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}

// Constructor functions

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

//    Object.freeze(this);
}

// {} <- this -> this
const p1 = new Pessoa('Luiz', 'Miranda');
// p1 = (ENDERECOMEMORIA) -> 'Valor'
// p1.ENDERECOMEMORIA = {nome: 'Outra coisa'}
// p1 = (NOVO ENDERECOEM...)
// p1.nome = 'Outra coisa';
const p2 = new Pessoa('Maria', 'Miranda');

console.log(p1);
console.log(p2);
