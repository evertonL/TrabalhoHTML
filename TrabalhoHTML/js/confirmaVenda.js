start();

function start() {
    var confirmacao = document.getElementById('buttonConfirma');

    buttonC.onclick = function() {
        confirmacao();
    };
}

function confirmacao(){
    var relatorios = [];

    var inputCPF = document.getElementById('cpf');

}

function saveLocalStorage(cliente) {

    var clientes = [];
    
    var clientee = localStorage.getItem("Cliente");
    if(clientee){ 

        clientes = JSON.parse(clientee);
    }

    clientes.push(cliente);

    localStorage.setItem("Cliente", JSON.stringify(clientes));

}
