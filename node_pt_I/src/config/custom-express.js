require('marko/node-require').install()
require('marko/express')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: true //bodyParser habilitado a receber objetos complexos em formato JSON
}))

const rotas = require('../app/routes/rotas')
rotas(app)

module.exports = app