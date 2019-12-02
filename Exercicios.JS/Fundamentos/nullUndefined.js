let valor // NÃO FOI INICIALIZADO
console.log(valor)

valor = null // AUSÊNCIA DE VALOR
console.log(valor)
//console.log(valor.toString()) // NÃO PODE FAZER A TROCA PARA STRING DE UM VALOR NULL

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // EVITE ATRIBUIR UNDEFINED, DEIXE QUE O PROPRIO SISTEMA IDENTIFIQUE QUE O VALOR É INDEFINIDO
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // SEM PREÇO
console.log(!!produto.preco)
console.log(produto)