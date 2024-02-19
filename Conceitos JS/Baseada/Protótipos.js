//Protótipo
const carroPrototype = {
    estilo: function () {
        console.log("Modelo do automóvel " + this.modelo + " ano do veículo " + this.ano + " sua cor " + this.cor + ".")
    }
};

//Criando base no protótipo 
const carro1 = Object.create(carroPrototype);
carro1.modelo = "Gol";
carro1.ano  = "2024";
carro1.cor = "preto";

const carro2 = Object.create(carroPrototype);
carro2.modelo = "Fox";
carro2.ano  = "2024";
carro2.cor = "cinza";

carro2.estilo();