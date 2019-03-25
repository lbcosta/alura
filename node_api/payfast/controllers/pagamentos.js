module.exports = app => {
    app.get('/pagamentos', (req, res) => {
        res.send('OK')
    })

    app.post('/pagamentos/pagamento', (req, res) => {
        const pagamento = req.body

        pagamento.stauts = "CRIADO"
        pagamento.data = new Date

        const connection = app.persistencia.connectionFactory()
        const pagamentoDao = new app.persistencia.PagamentoDao(connection)

        pagamentoDao.salva(pagamento, (erro, resultado) => {
            console.log('pagamento criado');
            res.json(pagamento)
        })


        res.send('OK')
        
    })
}