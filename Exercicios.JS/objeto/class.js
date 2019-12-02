// CLASS
class Lancamento{
    constructor(nome = 'Generico', valor = 0){ //CLASSE MAIS SIMPLES QUE TEM O CONSTRUTOR E COLOCA O VALOR NOS OBJETOS
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) { //TEM O CONSTRUTOR E FOI ACRESCENTADO MAIS DOIS METODOS addLancamentos E  sumario
        this.mes = mes 
        this.ano = ano
        this.lancamento = []
    }

    addLancamentos(...lancamentos) {
            lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidade = 0
        this.lancamentos.forEach(l => {
            valorConsolidade += l.valor
        })
        return valorConsolidade
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz) // EM UMA UNICA CHAMADA DO METODO VOCÊ PODE CHAMAR VARIOS LUGARES AO MESMO TEMPO
console.log(contas.sumario())