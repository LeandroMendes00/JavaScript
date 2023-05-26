/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

// ----Resultado Forma Certa----

const nome = 'Leandro';
const sobrenome = 'Alberto';
const idade = 22;
const peso = 70;
const alturaEmCm = 1.85;
let índiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

índiceMassaCorporal = peso / (alturaEmCm * alturaEmCm);        
anoNascimento = 2023 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmCm} de altura e seu IMC é de ${índiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
