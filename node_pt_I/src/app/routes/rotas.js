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

    app.post('/livros', (req, res) => {
        const livroDao = new LivroDao(db)
        livroDao.adiciona(req.body)
            .then(res.redirect('/livros'))
            .catch(err => console.log(err))
    })

    app.get('/livros/form', (req, res) => {
        res.marko(
            require('../views/livros/form/form.marko')
        )
    })
}

