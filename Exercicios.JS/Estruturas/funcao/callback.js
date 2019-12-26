const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))

// LOOP, QUANDO ELE ENCONTRA CADA ELEMENTO ELE CHAMA O CALBACK PARA PEGAR O ELEMENTO E O INDICE
// ENCOTROU UM OUTRO ELEMENTO CHAMA O CALBACK 
// PASSA A FUNÇÃO E CHAMA O ELEMENTO
