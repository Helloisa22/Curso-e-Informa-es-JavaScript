const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}', // SEMPRE QUE FOR NOME É DELIMITADO POR ""
    '{"nome": "Caderno", "preco": 13.99}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com preços

const paraObjeto = json => JSON.parse(json) // RECEBE JSON PARA QUE FAÇA A SOLICITAÇÃO 
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

// filter -> PERCORRER E FILTRAR UM ARRAY
// map-> TRANFORMAR UM ARRAY EM OUTRO.