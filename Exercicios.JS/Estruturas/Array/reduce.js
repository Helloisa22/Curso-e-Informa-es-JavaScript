// filter -> PERCORRER E FILTRAR UM ARRAY
// map-> TRANFORMAR UM ARRAY EM OUTRO.
// reduce -> ELA FAZ UMA BUSCA TOTAL NO ARRAY E COM BASE EM ALGUMA REGRA ELA TRAZ O VALOR FINAL
// QUE SERÁ SOLICITADO. ESPECIFICANDO ELA PODE PEGAR UM GRANDE ARRAY E TRANSFORMAR EM UM UNICO VALOR FINAL

const alunos = [
    {nome: "João", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true},
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {  // reduce
        console.log(acumulador, atual)
        return acumulador + atual
}) //}, 0) -> CONSIGO PASSAR UM VALOR INICIAL // COSNIGO PASSAR UM ARRAY

console.log(resultado)