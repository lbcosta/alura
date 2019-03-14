class ListaNegociacoes {
    
    constructor() {
        this._negociacoes =[]
    }

    /*
     * Só é possível adicionar pelo método e não é possivel editar ou remover (regra de negócio)  
     */
    adiciona(negociacao) {
        this._negociacoes.push(negociacao)
    }


    /*
     * Devolve uma copia do atributo, evitando que ele possa ser alterado fora da classe (programação defensiva)
     */
    get negociacoes() {
        return [...this._negociacoes]
    }
}