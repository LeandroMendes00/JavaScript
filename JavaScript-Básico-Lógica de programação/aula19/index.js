/*
Primitivos (imutáveis) - sritng, number, boolean, undefined,
null (bigint, symbol)

------------------------Primitivos
let a = 'A';
let b = a; //Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

Referência (mutável) - array, object, function - Passados por referência
*/
/*
let a = [1, 2, 3];
let b = [...a];
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(a, c);
*/

/*--------------Mutavel-----------------*/ 
const a = {
    nome: 'L',
    sobrenome: 'O'
};
const b = a;

b.nome  = 'J';
console.log(a);
console,log(b);