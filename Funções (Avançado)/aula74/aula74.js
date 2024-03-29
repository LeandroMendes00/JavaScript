/*
Javascript é baseado em protótipos para passar propriedades e métodos 
de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referi ao que foi criado pela 
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para 
criálo. Quando tentamso acessar um mebro de um objeto, primeiro o motro 
do JS 
vai tentar encontrar este membro do próprio objeto e depois a cadeia
de prototipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// intância 
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoas = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função construrora
const data = new Date(); // <-- Date = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);

// data -> Date.prototype -> Object.prototype !CADEIA!