class MensagemView extends View {

    /*
     * Por padrão, quando uma classe herda outra, ela também herda seu construtor.
     * Por isso, não precisa redeclarar chamando super
     * 
     * Caso o construtor da classe filha recebesse parametros diferentes do pai,
     * seria necessario declarar um constructor, chamar o super com seus devidos
     * parametros, e usar os novos parametros normalmente.
     */
    // constructor(elemento) {
    //     super(elemento)
    // }
    
    template(model) {
        //Só retorna algo se existir uma mensagem
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>'
    }

}