class ProdutosDAO {
    constructor(connection) {
        this._connection = connection;
    }
    lista(callback) {
        this._connection.query('SELECT * from livros', callback);
    }
    salva(produto, callback) {
        this._connection.query(`INSERT INTO livros SET ?`, produto, callback);
    }
}


module.exports = () => {
    return ProdutosDAO;
}