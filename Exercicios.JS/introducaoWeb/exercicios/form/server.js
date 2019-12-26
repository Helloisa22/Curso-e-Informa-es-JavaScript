const express = require('express') // ESTÁ FAZENDO UMA REQUISIÇÃO
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true})) // SE TIRAR ISSO NÃO CONSEGUE FAZER COM QUE A INFORMAÇÕES COLOCADAS
// NO FORMULARIO NÃO SEJA TRANFERIDA PARA O FORMULARIO EM JAVASCRIPT

app.post ('/usuarios', (req, resp) =>{
    console.log(req.body)
    resp.send('<h1>Parabéns</h1>')
})

app.listen(3003)