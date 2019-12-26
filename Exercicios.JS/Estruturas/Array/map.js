// MAP FAZ A TRANFORMAÇÃO DE UMA ARRAY PARA OUTRO ARRAY SÓ QUEM COM INFORMÇÕES ALTERADAS, MA MANTENDO A MESMA QUANTIDADE DE DADOS E INDICES

const nums = [1, 2, 3, 4, 5]

// for com propósito
let resultado = nums.map(function(e) {
    return e * 2
})

//console.log(nums) // O PRIMEIRO ARRAY NÃO PODE SER ALTERADO
console.log(resultado) // ESTE CRIA UM NOVO ARRAY QUE VEIO DO VELHO SÓ QUE COM INFORMAÇÕES ALTERADAS

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => ("R$ " + parseFloat(e).toFixed(2).replace(',', ','))

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)