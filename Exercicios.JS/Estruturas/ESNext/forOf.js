// Laço For -> usado apra interar em cima de array, Map, string

for (let letra of "Cod3r") {  //
    console.log(letra)          // Para percorrer uma palavra
}                            //

const assuntoEcma = ['Map', 'Set', 'Promise']

for (let i in assuntoEcma) {   //
    console.log(i)                 // Para percorrer o indice 
}                              //

    for (let assunto of assuntoEcma) {  //
    console.log(assunto)                   //  Para percorrer um as palavras que estão nesse array
}                                      //

const assuntoMap = new Map ([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for (let assunto of assuntoMap){  //
    console.log(assunto)            // Percorre o array e tras tudo que está dentro deles
}                                //

for (let chave of assuntoMap.keys()){  //
    console.log(chave)                   // Percorre o array e traz apenas a chaves primarias
}                                     //

for (let valor of assuntoMap.values()){     //
    console.log(valor)                          // Percorre todo o array e traz os valores da chaves
}                                           //

for (let [ch, vl] of assuntoMap.entries()) {    //
    console.log(ch, vl)                            //   Percorre todo o array e traz a chave e o valor
}                                               //

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra) 
}