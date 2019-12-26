Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++){ // this-> É O ARRAY ATUAL
        newArray.push(callback(this[i], i, this))   /// SEGUNDA FORMA DE FAZER A SOLICITAÇÃO DE INFORMAÇÃO COM PROTOTYPE
    }
    return newArray
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.99}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)