// const connectionFactory = require('../infra/connectionFactory');
//Agora a connectionFactory é carregada pelo express-load

module.exports = (app) => {
    app.get('/produtos', (req,res) => {
        // const connection = connectionFactory();
        const connection = app.infra.connectionFactory(); //Agora é carregado pelo seu próprio caminho
        const produtosDAO = new app.infra.ProdutosDAO(connection);


        produtosDAO.lista((erros, resultados) => {
            res.format({
                html: () => {
                    res.render('produtos/lista',{lista:resultados});
                },
                json: () => {
                    res.json(resultados);
                }
            })
        });

        connection.end();
    });

    app.get('/produtos/form', (req,res) => {
        res.render('produtos/form',{errosValidacao:{},produto:{}});
    });

    app.post('/produtos', (req, res) => {
        const connection = app.infra.connectionFactory(); //Agora é carregado pelo seu próprio caminho
        const produtosDAO = new app.infra.ProdutosDAO(connection);

        const produto = req.body;
        
        req.assert('titulo','Titulo é obrigatório').notEmpty();
        req.assert('preco','Formato inválido').isFloat();
        
        const erros = req.validationErrors();
        if(erros) {
            res.format({
                html: function(){
                    res.status(400).render('produtos/form',{errosValidacao:erros,produto:produto});
                },
                json: function(){
                    res.status(400).json(erros);
                }
            });
            return;
        }

        produtosDAO.salva(produto, (erros, resultados) => {
            res.redirect('/produtos');
        });
    });
}
