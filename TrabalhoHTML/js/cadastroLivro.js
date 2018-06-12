start();

function start() {
    var buttonS = document.getElementById('buttonSalvar');
    var buttonC = document.getElementById('buttonCancelar');
    buttonS.onclick = function() {
        addLivro();
    };

    buttonC.onclick = function() {
        confirmacao();
    };
}

function addLivro() {
    var inputName = document.getElementById('nome');
    var inputQtdPaginas = document.getElementById('QtdPaginas');
    var inputAltor = document.getElementById('altor');
    var inputEditora = document.getElementById('editora');
    var inputCodigoDoLivro = document.getElementById('codigo');

    if (isValidField(inputName) && 
        isValidField(inputQtdPaginas) &&
        isValidField(inputAltor)&&
        isValidField(inputEditora)&&
        isValidField(inputCodigoDoLivro)) {

            var livro = {
                nome:       inputName.value,
                QtdPaginas: inputQtdPaginas.value,
                altor:      inputAltor.value,
                editora:    inputEditora.value,
                codigo:     inputCodigoDoLivro.value
            };
        
        saveLocalStorage(livro);
        clearFields(inputName, inputQtdPaginas, inputAltor,inputEditora,inputCodigoDoLivro);
        alert('Salvo com Sucesso !');
        
    } else {
        alert('Preencha todos os campos!');
    }
}

function isValidField(field) {
    return field.value.trim() != '';
}

function clearFields(inputName, inputQtdPaginas, inputAltor,inputEditora,inputCodigoDoLivro) {
    inputName.value = '';
    inputQtdPaginas.value = '';
    inputAltor.value = '';
    inputEditora.value = '';
    inputCodigoDoLivro.value = '';
    inputName.focus();
}

function confirmacao(){  
    var confirma = window.confirm("Ao sair agora os dados informados não seram salvos! Sair mesmo Asim?");  
    if(confirma){	
        location.href = " TelaPrincipal.html"; 
    }
}

function saveLocalStorage(livro) {

    var livrosSalvos = [];

    var storage = localStorage.getItem("Livro");
    if(storage){ 

        livrosSalvos = JSON.parse(storage);
    }

    livrosSalvos.push(livro);

    localStorage.setItem("Livro", JSON.stringify(livrosSalvos));
}

