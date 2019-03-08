class DateHelper {

    constructor() {
        /**
         * Sinalizar ao programador que a classe é estatica (Classe utilitaria)
         */
        throw new Error('DateHelper não pode ser instanciada')
    }

    static dataParaTexto(data) {
        return data.getDate() 
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear()
    }

    static textoParaData(texto) {
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2))
    } 
    
}