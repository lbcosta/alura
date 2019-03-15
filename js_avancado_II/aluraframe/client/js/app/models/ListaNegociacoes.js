class ListaNegociacoes {
    
    //TRIGGER = PADRÃO OBSERVER
    constructor(armadilha) {
        this._negociacoes =[]
        this._armadilha = armadilha
    }

    /*
     * Só é possível adicionar pelo método e não é possivel
     * editar ou remover (regra de negócio)  
     */
    adiciona(negociacao) {
        this._negociacoes.push(negociacao)
        this._armadilha(this)
    }


    /*
     * Devolve uma copia do atributo, evitando que ele possa ser alterado
     * fora da classe (programação defensiva)
     */
    get negociacoes() {
        return [...this._negociacoes]
    }

    esvazia() {
        this._negociacoes = []
        this._armadilha(this)
    }
}