function tratarErroELancar(erro) { // chamando o erro e dando a mensagem para o cliente
    // throw new Erro('....')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.nome,
        msg: erro.mesage,
        data: new Date
    }
}


function imprimirNomeGritando(obj) {
    try { // bloco tentar
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) { // quando indetificado o erro você pode tratar ou mandar uma mensagem de erro
        tratarErroELancar(e)
    } finally { // bloco sempre será executado mesmo dando erro ou não, mensagem final para o cliente
        console.log('final')
    }
}

const obj = { name: 'Roberto'} /// constante para tratamento de erro.
imprimirNomeGritando (obj)