const escola = "Cod3r"

console.log(escola.charAt(4)) // ESCOLHE O INDICE E RETORNA QUAL LETRA ESTÁ NESSE INDICE
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //RETORNA O VALOR QUE ESTÁ NO UNICODE REFERENTE AO VALOR COLOCADO ENTRE PARENTESES
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola'.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

console.log('Maria, Ana, Pedro'.split(','))