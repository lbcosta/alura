class Negociacao {

    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime()) //Não confia no objeto que o usuário passa
        this._quantidade = quantidade
        this._valor = valor
        /*
         * Freeze:
         * Objeto é imutável de maneira rasa (raso = propriedades
         * que são objetos ainda podem ter suas propriedades alteradas)
         */
        Object.freeze(this) //
    }

    /*
     * Modificador "get":
     *  Torna possível acessar o método
     *  a partir do nome da propriedade
     */

    get data() {
        /*
         * Programação Defensiva:
         *  É retornada uma nova data baseada na data do objeto 
         *  para que não seja possível alterar a data por fora
         */
        return new Date(this._data.getTime())
    }

    get quantidade() {
        return this._quantidade
    }

    get valor() {
        return this._valor
    }

    get volume() {
        return this._valor * this._quantidade
    }


}