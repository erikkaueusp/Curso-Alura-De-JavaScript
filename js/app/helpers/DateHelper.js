class DateHelper {

    constructor() {
        // Forma de evitar que a classe seja instanciada.
        throw new Error('DateHelper não deve ser instanciada');
    }

    static textoParaData(texto) {
        //regex - expressão regular
        if (!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');

        //Uso do Template String
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    static dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;

    }

}