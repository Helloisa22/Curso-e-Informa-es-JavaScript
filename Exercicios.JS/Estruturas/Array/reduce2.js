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

// Desafio 1: Todos os alunos são bolsista ?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))