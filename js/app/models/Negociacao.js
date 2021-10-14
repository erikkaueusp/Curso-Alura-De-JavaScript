class Negociacao {

    // criação do construtor
    constructor(data, quantidade, valor) {

        // os atributos não são privados, colocamos como convenção o "_" antes da variavel
        // isso significa para o programador que aquela variavel está como "privada".
        // isso porque no javascript ainda não temos modificadores de acesso -> private, protect etc.

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

        // Faz com que a classe seja congelada "imutavel" mas de forma shallow = raza
        // nesse exemplo a data continua sendo mutavel.
        // Object.freeze(this);

    }

    // Para os métodos de acesso em javascript utiliza get nomeDoMetodo()
    // Isso define que o método será somente para leitura e impede que seja modificado.
    // Também podemos acessar como se fosse um atributo sem colocar "()".


    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    // Dica: Diferença entre let e var, let - Será definida como variavel de bloco dentro de um escopo e var escopo de função global.
    // De preferencia para let.

}