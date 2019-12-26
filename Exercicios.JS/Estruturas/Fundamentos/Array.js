const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores [3])

valores[4] = 10 //ADICIONAR UM NOVO INDICE COM O VALOR 10
console.log(valores)
console.log(valores.length) //MOSTRAR QUANTOS ELEMENTOS TEM DENTRO DO ARRAY

valores.push({id:3}, false, null, 'teste') //ADICIONAR NOVOS ELEMENTOS DE VARIOS VALORES PARA AO ARRAY
console.log(valores)

console.log(valores.pop()) //PEGA O ÚLTIMO ELEMENTO DO ARRAY E DEVOLVE O VALOR NULLO
delete valores[0] // OUTRA FORMA PARA DELETAR ELEMENTOS
console.log(valores)

console.log(typeof valores) 