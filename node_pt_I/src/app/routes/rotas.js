const LivroDao = require('../infra/livro-dao')
const db = require('../../config/database')

module.exports = app => {
    app.get('/', (req, res) => {
        res.send('<h1>UHUUUU</h1>')
    })    

    app.get('/livros', (req, res) => {
        
        const livroDao = new LivroDao(db)
        livroDao.lista()
            .then(livros => res.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: livros
                }
            ))
            .catch(err => console.log(err))
        
    })

    app.get('/livros/form/:id', function(req, resp) {
        const id = req.params.id
        const livroDao = new LivroDao(db)
    
        livroDao.buscaPorId(id)
            .then(livro => 
                resp.marko(
                    require('../views/livros/form/form.marko'),
                    { livro: livro }
                )
            )
            .catch(erro => console.log(erro))
    
    })

    app.post('/livros', (req, res) => {
        const livroDao = new LivroDao(db)
        livroDao.adiciona(req.body)
            .then(res.redirect('/livros'))
            .catch(err => console.log(err))
    })

    app.put('/livros', (req, res) => {
        const livroDao = new LivroDao(db)
        livroDao.atualiza(req.body)
            .then(res.redirect('/livros'))
            .catch(err => console.log(err))
    })

    app.get('/livros/form', (req, res) => {
        res.marko(
            require('../views/livros/form/form.marko'), { livro: {} }
        )
    })

    app.delete('/livro/:id', (req, res) => {
        const id = req.params.id

        const livroDao = new LivroDao(db)
        livroDao.remove(id)
            .then(() => {
                res.status(200).end()
            })
            .catch(err => console.log(err)
            )
    })
}

