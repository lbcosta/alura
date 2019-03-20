class LivroDAO {
    constructor(db) {
        this._db = db
    }

    adiciona(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO livros (
                    titulo,
                    preco,
                    descricao
                ) values (?,?,?)
            `, [
                livro.titulo,
                livro.preco,
                livro.descricao
            ],(err) => {
                if(err) {
                    console.log(err);
                    return reject('Não foi possível adicionar o livro')
                }

                resolve()
            })
        })
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                `SELECT * FROM livros`,
                (err, result) => { 
                    if(err) return reject('Não foi possível listar os livros')
                    return resolve(result)
                }
            )
        })
    }

    buscaPorId(id) {
        return new Promise((resolve, reject) => {
            this._db.get(
                'SELECT * FROM livros WHERE id = ?',[id],
                (err, result) => {
                    if(err) return reject('Não foi possível achar o livro')
                    return resolve(result)
                }
            )
        })
    }

    atualiza(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                 UPDATE livros
                 SET titulo = ?, preco = ?, descricao = ?
                 WHERE id = ?
            `,[
                livro.titulo,
                livro.preco,
                livro.descricao,
                livro.id
            ], (err) => {
                if(err) {
                    console.log(err);
                    return reject('Não foi possível adicionar o livro')
                }

                resolve()
            })
        })
    }

    remove(id) {
        return new Promise((resolve, reject) => {
            this._db.get(`
                 DELETE FROM livros
                 WHERE id = ?
            `,[id], 
              (err) => {
                  if (err) {
                      console.log(err);
                      return reject('Não foi possível adicionar o livro')
                  }

                  resolve()
            })
        })
    }
}

module.exports = LivroDAO