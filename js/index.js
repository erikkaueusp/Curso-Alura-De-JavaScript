// list qual seu valor
var campos = [
    //document.queryselector é uma api do DOM usando o seletor do css
    //permite buscar elementos do DOM pelo css (# - id)
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

//(. - classe)
// quando ocorrer o evento chamar uma função de callback
//Por padrão sempre que você envia um formulario, ele recarrega a pagina
// para previnir, pedimos ao event prevent
document.querySelector('.form').addEventListener('submit', function(event) {
    // alert('teste');

    event.preventDefault();

    // criar tr dinamicamente
    var tr = document.createElement('tr');
    campos.forEach(function(campo) {

        var td = document.createElement('td');
        td.textContent = campo.value;
        // adiciona um filho a tr
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    //limpar os campos
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
    //campo data ganha o foco
    campos[0].focus();

});