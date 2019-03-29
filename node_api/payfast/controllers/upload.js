const fs = require('fs')

module.exports = app => {

    app.post('/upload/imagem', (req, res) => {
        const arquivo = req.headers.filename
        console.log(`Arquivo recebido: ${arquivo}`);
        
        req.pipe(fs.createWriteStream(`files/${arquivo}`)).on('finish', _ => {
            console.log('Arquivo escrito')
            res.status(201).send('ok')
        })
    })
}