const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // RETIRA DO ARRAY O ULTIMO INDICE/ELEMENTO
console.log(pilotos)

pilotos.push('Verstappen')// ADICIONA UM NOVO ELEMENTO DENTRO DO ARRAY SEMPRE NA ÚLTIMA POSIÇÃO
console.log(pilotos)

pilotos.shift() // ESSA FUNÇÃO REMOVE O PRIMEIRO INDICE/ELEMENTO
console.log(pilotos)

pilotos.unshift('Hamilton') // FUNÇÃO PARA ADICIONAR UM ELEMENTO NO INDICE DE NUMERO 0
console.log(pilotos)

// SPLICE PODE ADICIONAR E REMOVER ELEMENTOS

// ADICIONAR
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// REMOVER
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // FAZER UM NOVO ARRAY A PARTIR DO ORIGNAR
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)