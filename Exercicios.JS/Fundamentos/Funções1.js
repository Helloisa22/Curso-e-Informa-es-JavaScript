// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3) // A soma 
imprimirSoma(2) // APENAS UM NÚMERO DEFINIDO ELE VAI TENTA FAZER A SOMA E QUANDO NÃO ENCONTRAR LE VAI DEVOLVER UM NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // ELE VAI SOMAR OS DOIS PRIMIEROS E VAI IGUINORAR O RESTANTE
imprimirSoma() // VAI RETOERNAR NaN

// FUNÇÃO COM RETORNO
function soma(a, b =1){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())