const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c }}
console.log(JSON.stringify(obj)) // O JSON É UM FORMATO DE DADOS ELE NÃO É ALGO QUE É EXECUTAVEL // TRAFEGAR

// console.log(JSON.parse(' { a: 1, b: 2, c: 3} '))
// console.log(JSON.parse(" {'a': 1, 'b': 2, 'c':3} "))
// console.log(JSON.parse(' {"a": 1, "b" 2, "c": 3} '))
console.log(JSON.parse(' {"a": 1, "b": 2, "c": 3} '))