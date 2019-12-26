//   ... Rest -> Pegar algo que está espalhado e juntar
// ... Spread -> Pegar algo que está que está junto e separar
// Usar rest com parâmetro de função

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 1233.00}
const clone = {ativo: true, ...funcionario} //(...) -> simbolo que está dizendo que a função que etsá fazendo é um spread
console.log(clone)

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)
