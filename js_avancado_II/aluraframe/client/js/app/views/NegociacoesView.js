class NegociacoesView extends View {

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
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                </tbody>
                ${
                    model.negociacoes.map(n => `
                        <tr>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `
                    ).join('')
                }
                <tfoot>
                    <td colspan="3"></td>
                    <td>
                        ${model.negociacoes.reduce((sum,n) => sum + n.volume, 0.0)}
                    </td>
                </tfoot>
            </table>
        `
    }
}