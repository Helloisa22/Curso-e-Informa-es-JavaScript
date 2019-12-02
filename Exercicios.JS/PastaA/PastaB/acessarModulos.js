const moduloA = require('../../moduloA') // SAI DAS PASTAS E PROCURAR ARQUIVOS EM OUTRAS PASTA 
// // UTILIZANDO O REQUIRE 
console.log(moduloA.ola)

const moduloD = require('../../../moduloD')
console.log(moduloD.X)

//////////////////////////////// EXPORT ///////////////////////////////////////
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'  // MESMO QUE TENHA MUDADO A REFERENCIA DUAS VEZES VAI PERMANECER O MESMO VALOR
}

console.log(module.exports)

module.exports = {publico: true}