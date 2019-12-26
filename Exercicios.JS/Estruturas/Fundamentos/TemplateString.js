const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!` //DENTRO DO TEMPLATE STRING ELE C0MPREENDE AS QUEBRAS DE LINHA
console.log(concatenacao, template)

// EXPRESSOES...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() //PARA DEIXA TODAS AS LETRAS DA PALAVRA EM LETRAS MAIÚSCULAS
console.log(`Ei... ${up('cuidado')}!`)
