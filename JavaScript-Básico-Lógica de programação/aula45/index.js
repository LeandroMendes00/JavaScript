// try {
//     console.log(a);
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
//     // É executa quando não há erros

//     try {
//       console.log(b);
//     } catch(e) {
//       console.log('Deu erro');
//     } finally {
//       console.log('Também sou finally.');
//     }

// } catch (e) {
//     console.log('Tratando o erro');
//     // É executada quando há erros
// } finally {
//     console.log('FINALLY: Eu sempre sou executado')
//     // Sempre
// }
function retonaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new Typ7eError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-Br', {
        hour: '2 digit',
        minute: '2-digit',
        second: '2 digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retonaHora(11);
    console.log(hora);
} catch(e) {
    // Tratar erro
    // console.log(e);
}   finally {
    console.log('Tenha um bom dia.');
}
