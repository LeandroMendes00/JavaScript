//deixe o nome = 'Luiz';

//enquanto (i <= nome.comprimento) {
// console.log(nome[i]);
// i++;
///}

//console.log('Segue o vídeo...');

function random( min ,  max )  {
	const  r  =  Matemática . random ( )  *  ( max -  min )  +  min ;
    return r ;
}
 const  min = 1 ;
 const  máx = 50 ;
let  rand  =  aleatório ( min ,  max ) ;
//console.log(rand);

while  ( rand  !== 10 )  {
	rand  =  aleatório ( min ,  max ) ;
	console.log ( rand ) ;
}

console . log ( '#####' ) ;

do {
	rand  =  aleatório ( min ,  max ) ;
	console.log ( rand ) ; 
}while  ( rand  !== 10 ) ;