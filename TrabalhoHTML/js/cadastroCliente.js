var clientes = [];

start();

function start() {
    var buttonS = document.getElementById('buttonSalvar');
    var buttonC = document.getElementById('buttonCancelar');

    buttonS.onclick = function() {
        addCliente();
    };
    buttonC.onclick = function() {
        confirmacao();
    };
}

function addCliente() {
    var inputName = document.getElementById('nome');
    var inputCPF = document.getElementById('cpf');
    var inputEmail = document.getElementById('email');
    var inputTelefone = document.getElementById('telefone');
    var inputEndereco = document.getElementById('endereco');

    if (isValidField(inputName) && 
        isValidField(inputCPF) &&
        isValidField(inputEmail)&&  
        isValidField(inputTelefone)&&
        isValidField(inputEndereco)) {

        var cliente = {
            nome:     inputName.value,
            cpf:      inputCPF.value,
            email:    inputEmail.value,
            telefone: inputTelefone.value,
            endereco: inputEndereco.value
        };

        
        saveLocalStorage(cliente);
        clearFields(inputName, inputCPF, inputEmail,inputTelefone,inputEndereco);
        alert('Salvo com Sucesso !');

    } else {
        alert('Preencha todos os campos!');
    }
}

function isValidField(field) {
    return field.value.trim() != '';
}

function clearFields(inputName, inputCPF, inputEmail,inputTelefone,inputEndereco) {
    inputName.value = '';
    inputCPF.value = '';
    inputEmail.value = '';
    inputTelefone.value = '';
    inputEndereco.value = '';
    inputName.focus();
}

function confirmacao(){  
    var confirma = window.confirm("Ao sair agora os dados informados não seram salvos! Sair mesmo Asim?");  
    if(confirma){

        location.href = " TelaPrincipal.html"; 
    }
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
