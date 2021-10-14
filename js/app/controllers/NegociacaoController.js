class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);

    }






    adiciona(event) {

        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Adicionado com sucesso!'
        this._mensagemView.update(this._mensagem);
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();


        // ... É um spread operator, significa que o array será desemembrado e o primeiro item
        // do array será posicionado na mesma ordem do construtor date.
        // let data = new Date(...this._inputData.value
        //     .split('-')
        //     .map((item, indice) => item - indice % 2)
        //arrow function, de uma linha sem return e {}


        // .map(function(item,indice) {
        //     return item - indice % 2;
        // Isso está sendo usado porque o mês começa em 0,1,2..11
        // logo, o valor do mês se encontra no indice 1 e sempre que o map
        // percorrer e chegar no indice 1, o resto da divisão será 1 também.
        //subtraindo o valor do item de 1.
        // })

        // );

        // let negociacao = new Negociacao(
        //     DateHelper.textoParaData(this._inputValor.value),
        //     this._inputQuantidade.value,
        //     this._inputValor.value
        // );
        // console.log(negociacao);

        // alert('Chamando ação do controller');

        // fazendo um alias (chamar por um apelido) estilo jQuery
        // o bind é pra manter a associação com document
        // let $ = document.querySelector.bind(document);
        // let inputData = $('#data');
        // let inputQuantidade = $('#quantidade');
        // let inputValor = $('#valor');


        // console.log(inputData.value);
        // console.log(inputQuantidade.value);
        // console.log(inputValor.value);
        // API de DOM é "preguiçosa" por isso é melhor criar no construtor
        // Para que não se fique buscando toda hora no DOM

    }
    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

    }


    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0

        this._inputData.focus();
    }

}