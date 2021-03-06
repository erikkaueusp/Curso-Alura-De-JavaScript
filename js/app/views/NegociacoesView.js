class NegociacoesView extends View {

    _template(model) {
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
        ${model.negociacao.map((n) => {
            return `<tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
            
            `
        }).join('')
    }
        </tbody>

        <tfoot>
            <td colspan="3" class="text-center"><strong>Volume Total</strong></td>
            <td>
                ${model.negociacao.reduce((total,n) => total + n.volume, 0.0)}
        </tfoot>
    </table>`;

    }

}