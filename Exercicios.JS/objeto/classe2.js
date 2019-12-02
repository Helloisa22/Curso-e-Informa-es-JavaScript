// HERANÇA EM JAVASCRIPT

class Avo {
    constructor(sobrenome)  {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = "Professor") {
        super(sobrenome)
        this.profissao = profissao
    }
}

class filho extends Pai {
    constructor(sobrenome = "Silva") {
        super(sobrenome)
    }
}

const filho = new filho
console.log(filho)