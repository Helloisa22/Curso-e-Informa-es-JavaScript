// Ele comando para percorrer todo o Objeto
const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) // Desta forma vai dar um valor undefined, pois não tem um parametro chamado react
console.log(tecnologias.get('react').framework) //  está perguntando se o react é um framework -> valor da chave 

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto '],
    [123, 'Numero'],
])

chavesVariadas.forEach((vl, ch) =>{
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // has -> se um elemento está ou não contido dentrou desse map retorna T ou F
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) // contar qauntos elementos tem neste  Map

chavesVariadas.set(123, 'a') // set-> armazenar valores uniocos.
chavesVariadas.set(123, 'b') // chaves não pode se repitir, porém os valores pode 
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)