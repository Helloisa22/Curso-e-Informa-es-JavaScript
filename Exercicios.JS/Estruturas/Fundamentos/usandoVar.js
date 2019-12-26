{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

console.log(sera) //BLOCO QUE NÃO SEJA UMA FUNÇAÕ ENTÃO ELA SERA VISIVEL FORA DO BLOCO

/////////////////////

function teste() {
    var local = 123
    console.log(local)
} //QUANDO DECLARA UMA VARIAVEL DENTRO DE UMA FUNÇÃO ELA SE TORNA APENAS DA FUNÇÃO, SENDO ASSIM ELA NÃO SE TORNA GLOBAL

teste()


///////////////////////////////////////// VAR 2 ///////////////////////////////////////////////////////////////////////

var numero = 1
{
    var numero = 2
    console.log('Dentro =', numero)
}
console.log('Fora =', numero)