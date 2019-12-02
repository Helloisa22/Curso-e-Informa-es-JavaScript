// FORMAS DIFERENTES PARA PERCORRER O ARRAY, E SOLICITAR INFORMAÇÕES
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) { // É UM LAÇO FOR QUE PERCORRE TODO O SEU ARRAY
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)

