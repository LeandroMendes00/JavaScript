/* argumentos que sustenta todos os argumentos enviados
function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao(2, null, 20);
*/
const conta = (...args) => {
    console.log(args);
};
conta('+', 1, 20, 30, 40, 50);