// Escreva uma função chamada ePaisagem que
// que recebe dois argumentos, largura e altura 
// de uma imagem (numeber).
// Retorne true se a imagem estiver no modo
// paisagem.

const ePaisagem = (largura, altura) => largura > altura;
//function ePaisagem(largura, altura) {
//   return largura > altura ? true : false;
//}

console.log(ePaisagem(1920, 1080));
