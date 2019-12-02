// ARMAZENANDO UMA FUNÇÃO EM UMA VARÍAVEL
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// ARMAZENANDO UMA FUNCAO ARROW EM UMA VARIAVEL
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//RETORNO IMPLÍCITO
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

console.log('Legal !!')