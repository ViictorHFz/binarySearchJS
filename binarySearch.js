const listBooks = require('./array');

function binarySearch(array, de, ate, valorBuscado) {
    //console.log("de", "ate", de, ate)
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];

    if(de > ate) {
        console.log("Não encontra nada!");
        return -1; //Retorno meio que padrão do JS quando não encontra nada em sort functions
    }

    if(valorBuscado === atual.price) {
        return meio;
    }

    if(valorBuscado < atual.price){
        return buscaBinaria(array, de, meio - 1, valorBuscado);
    }

    if(valorBuscado > atual.price){
        return buscaBinaria(array, meio + 1, ate, valorBuscado);
    }
}

console.log(buscaBinaria(listaLivros, 0, listaLivros.length - 1, 40));