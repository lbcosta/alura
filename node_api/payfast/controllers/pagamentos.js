module.exports = app => {
    app.get('/pagamentos', (req, res) => {
        res.send('OK')
    })

    app.post('/pagamentos/pagamento', (req, res) => {

        req.assert("forma_de_pagamento", "Forma de pagamento é obrigatório").notEmpty()
        req.assert("valor", "Valor é obrigatório e deve ser um decimal").notEmpty().isFloat()

        const erros = req.validationErrors()

        if(erros) {
            console.log("Erros de validação encontrados")
            res.status(400).send(erros)
            return
        }

        const pagamento = req.body
        console.log("Processando uma requisição de um novo pagamento")

        pagamento.status = "CRIADO"
        pagamento.data = new Date

        const connection = app.persistencia.connectionFactory()
        const pagamentoDao = new app.persistencia.PagamentoDao(connection)

        pagamentoDao.salva(pagamento, (erro, resultado) => {
            if(erro) {
                console.log(`Erro ao inserir no banco: ${erro}`)
                res.status(500).send(erro)
            } else {
                console.log('pagamento criado')
                res.location(`/pagamentos/pagamento/${resultado.insertId}`)
                res.status(201).json(pagamento)
            }
        })
    })
}