const pessoa = {
    saudacao: 'Bom Dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // 

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // metodo responsavel por amarrar um 
// determinado objeto para ele ser o dono daquele objeto sempre quer ele for chamado

