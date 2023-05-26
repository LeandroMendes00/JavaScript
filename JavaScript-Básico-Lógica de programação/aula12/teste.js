let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
/* ERRADO 
varA = varB;
varB = varC;
varC = varA;
*/ 
/* Mais fácil*/
[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);
