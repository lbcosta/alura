/* Configura o Express */

/*
    Puxar direto do express necessita que configuremos ele após isso.
    Em um arquivo separado, a configuração pode ser feita isoladamente e
    o Express ser importado já configurado.
*/
const app = require('./config/express')();


/* Configura as Rotas */
// const rotasProdutos = require('./app/routes/produtos')(app);
/* Agora as rotas são carregadas no objeto app através do express-load */

/* Inicia o servidor */
app.listen(3000, () => {
    console.log('Servidor rodando...');
    
})

/* Para procurar e encerrar app usando porta 3000: sudo kill `sudo lsof -t -i:3000` */