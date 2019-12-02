// console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') // FORMA DE DIZER QUE ISSO É UM ARRAY 
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // FORMA MAIS APROPRIADA PARA ADICIONAR UM ARRAY
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' // USADO MAIS PARA FAZER A SUBSTITUIÇÃO DE VALORES (LOCAL DETERMINADO)
aprovados.push('Abia') // PARA ADICIONAR SEMPRE UM NO INDICE NO FINA DE TODOS OS INDICES (SEMPRE UTILIZAR ESSE)
console.log(aprovados.length) // PARA CONTAR O TOTAL DE CAMPOS EXISTENTES NO ARRAY

aprovados[9] = 'Rafael' // USADO MAIS PARA FAZER A SUBSTITUIÇÃO DE VALORES (LOCAL DETERMINADO)
console.log(aprovados.length) // PARA CONTAR O TOTAL DE CAMPOS EXISTENTES NO ARRAY
console.log(aprovados[8] === undefined)  // COMPROVANDO SE O INDICE 8 DO ARRAY ESTÁ COMO UNDEFINED

console.log(aprovados) 
aprovados.sort() // FUNÇÃO QUE CHAMA O ARRAY E FAZER ALTERÇÃO NOS LOCAIS EM QUE ESTÃO AS INFORMAÇÕES
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
// aprovados.splice(1, 2) // EXCLUINDO A PARTIR DO INDICE 1 DOIS ELEMENTOS carlos e ana
// splice -> SERVE PARA ADICIONAR ELEMENTOS EM UM DETEERMINADO INDICE E PARA REMOVER ELEMENTOS DE ARRAY ADICIONAR TAMBÉM
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // ADICIONANDO A PARTIR DO INDICE 1 DOIS ELEMENTOS DEPOIS bia, elemento1, elemento2 
console.log(aprovados) // RESULTADO: [ 'Bia', 'Elemento1', 'Elemento2' ]
