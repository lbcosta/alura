class NegociacaoController {

    constructor() {

        /*
         * Bind é necessário para o método guardado na variável
         * continuar sendo o método do objeto 'document'  
         */  
        let $ = document.querySelector.bind(document)


        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')

        //TRIGGER = PADRÃO OBSERVER
        this._listaNegociacoes = new ListaNegociacoes(model => { //Passando trigger
            /*
             * O escopo de uma Arrow Function é LÉXICO!
             * Ele não muda com o contexto (Não é dinâmico)
             * Ou seja, o THIS aqui dentro, é de NegociacaoController
             * em qualquer canto que essa função seja executada!
             */
            this._negociacoesView.update(model)
        })
        
        this._negociacoesView = new NegociacoesView($('#negociacoesView'))
        this._negociacoesView.update(this._listaNegociacoes)
        
        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView($('#mensagemView'))
        this._mensagemView.update(this._mensagem)
    }

    adiciona(event) {
        event.preventDefault()
        
        this._listaNegociacoes.adiciona(this._criaNegociacao()) //Aciona trigger dentro da classe

        this._mensagem.texto = 'Negociação adicionada com sucesso'
        this._mensagemView.update(this._mensagem)
        this._limpaFormulario()
    }

    apaga() {

        this._listaNegociacoes.esvazia()
        this._mensagem.texto = "Negociações removidas com sucesso"
        this._mensagemView.update(this._mensagem)

    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    _limpaFormulario() {
        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0

        this._inputData.focus()
    }
}