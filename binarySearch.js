const listaLivros = require('./array');

function binarySearch(array, de, ate, targetValue) {
    //console.log("de", "ate", de, ate)
    const meioArray = Math.floor((de + ate) / 2);
    const index = array[meioArray]; //index = posicão atual do array

    if(de > ate) {
        console.log("Não encontra nada!");
        return -1; //Retorno meio que padrão do JS quando não encontra nada em sort functions
    }
    
    //targetValue = Valor Buscado
    if(targetValue === index.preco) {
        return meioArray;
    }

    if(targetValue < index.preco){
        return binarySearch(array, de, meioArray - 1, targetValue); //Recursão
    }

    if(targetValue > index.preco){
        return binarySearch(array, meioArray + 1, ate, targetValue);
    }
}

console.log(binarySearch(listaLivros, 0, listaLivros.length - 1, 40));