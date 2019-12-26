const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]() // POR TER CRIADO UMA VARIAVEL NÃO GLOBAL QUANDO TENTA CHAMAR A  FUNÇAÕ FORA DO FOR, ELA NÃO IDENTIFICA 
// E SEMPRE VAI DEVOLVER O ÚLTIMO VALOR


/////////////// USANDO LET EM LOOP /////////////////////////////////////////////

const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()