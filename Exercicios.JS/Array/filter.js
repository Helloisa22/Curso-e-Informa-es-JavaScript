// UMA FUNÇÃO CALBACK

// filter -> PERCORRER E FILTRAR UM ARRAY
// map-> TRANFORMAR UM ARRAY EM OUTRO.
// reduce -> ELA FAZ UMA BUSCA TOTAL NO ARRAY E COM BASE EM ALGUMA REGRA ELA TRAZ O VALOR FINAL
// QUE SERÁ SOLICITADO. ESPECIFICANDO ELA PODE PEGAR UM GRANDE ARRAY E TRANSFORMAR EM UM UNICO VALOR FINAL
const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "iPad Pro", preco: 4199, fragil: true},
    {nome: "Copo de Vidro", preco: 12.49, fragil: true},
    {nome: "Copo de Plástico", preco: 18.99, fragil: false},
]

// PROUTOS MAIS CAROS 
// QUE O FRAGIL SEJA TRUE

console.log(produtos.filter(function(p) {
    // return p.preco <= 19.00 
    return false 
}))

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))

// const resultado = produtos.map(p).map(l)
// console.log(resultado)
