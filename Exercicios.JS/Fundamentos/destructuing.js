//  Novo recurso do ES2015
//  COM OBJETOS
// const pessoa = {
//     nome: 'Ana',
//     idade: 5,
//     endereco:{
//         logradouro: 'Rua ABC',
//         numero: 1000
//     }
// }

// const { nome, idade } = pessoa
// console.log(nome, idade)

// const { nome: n, idade: i } = pessoa
// console.log(n,i)

// const { sobrenome, bemHumorada=true } = pessoa
// console.log(sobrenome, bemHumorada)

// const { endereco: { logradouro, numero, cep } } = pessoa
// console.log(logradouro, numero, cep)

// const{ conta: { ag, num } } = pessoa
// console.log(ag, num)
//////////////////////////////////////////////////////////////////////////////////////////

// MOSTRNDO COM ARRAY
// const [a] = [10]
// console.log(a)

// const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8]
// console.log(n1, n3, n5, n6)

// const [[, nota, ,], [, nota1, ]] = [[, 5, 7], [9, 6, 8]]
// console.log(nota, nota1)

/////////////////////////////////////////////////////////////////////////////////////////////////

// MOSTRANDO EM FUNÇÃO OBJETO
function rand({ min = 0, max = 100 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))
