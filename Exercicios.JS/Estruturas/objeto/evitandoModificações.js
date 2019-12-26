// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) // SELADO VOCÊ NÃO PODE EXCLUIR OU ADICIONAR NOVOS CAMPOS 
// MAS PODE ALTERAR AS INFORMAÇÕES DENTRO DOS CAMPOS JÁ EXISTENTE
console.log('Selada:', Object.isSealed(pessoa)) // VERIFICAÇÃO SE ESTÁ SELADO OU NÃO

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes
// NÃO CONSEGUE INCLUIR NOVOS VALORES, EXCLUIR NOVOS VALORES NEM CHAVES. E NEM MODIFICAR OS JÁ EXISTENTES
 