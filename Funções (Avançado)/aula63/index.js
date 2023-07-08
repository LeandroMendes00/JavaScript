//                -5      -4       -3         -2         -1
//                 0       1        2          3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// Push
nomes.splice(nomes.length, 0, 'Luiz', 'Otávio', 'Miranda');
console.log(nomes);

// Unshif
// nomes.splice(2, 0, 'Luiz', 'Otávio');

// nomes.splice(índice atual, delete, elem1, elem2, elem3);
// pop
// const removidos = nomes.splice(-1, 1);

// shift
// const removidos = nomes.splice(0, 1);