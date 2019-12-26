function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor: `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)

// forEach -> Ele percorre todo o array ou objeto -> Consegue também fazer com que percorra e adicione como por exemplo um indice
// toFixed -> Ele pega valores decimais e arredonda o valor ou insire casas decimais
// isNaN   -> Verifica se o valor é nan ou não (se ele está undefined  ou não)
// join    -> ****