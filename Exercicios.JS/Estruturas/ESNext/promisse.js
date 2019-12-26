// Promise -> Tipo de processamento assincrono, uma mensagem a ser dada por ultimo, caso a sua função tenha dado certo
// uma promesa de que aquilo ira acontecer

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject)=> {
        setTimeout(() =>{ // setTimeOut e timer a qual você define um timer de execução
            reject(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then((frase) => frase.concat("?!?"))           //
    .then(outraFrase => console.log(outraFrase))        // Chamar o resolve // encadeando uma com a outra
    .catch(e => console.log(e)) // Para chamar o reject 