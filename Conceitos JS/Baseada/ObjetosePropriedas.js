//Objetos e Propriedades
const pessoa = {
    nome: "Leandro",
    idade: 22,
    naturalidade: "São Paulo",
    apresentação: function() {
        console.log("Eu me chamo " + this.nome + " tenho " + this.idade + ", sou de " + this.naturalidade + ".")
    }
};

pessoa.apresentação();
/// asdasdasd