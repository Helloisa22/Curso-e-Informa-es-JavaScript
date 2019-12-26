const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Saber se o número é inteiro ou não e retornando verdadeiro ou falso para a pergunta.
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //DELIMITAR QUANTAS CASAS DECIMAIS QUER QUE SEJE APRESENTADA
console.log(media.toString(2)) // toString PARA ALTERAR NÚMERO PARA STRING 
// ADICIONA DENTRO DE PARENTESES UM NÚMERO PARA TRANSFFROMAR EM NÚMERO BINÁRIO.
console.log(typeof media)