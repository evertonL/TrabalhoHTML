loadDataFromLocalStorage()
clearTable();
populateTable();

function clearTable() {
    var table = document.getElementById('tabela');
    var tBody = table.tBodies[0];

    for (var i = tBody.children.length; i > 0; i--) {
        var tr = tBody.children[i - 1];
        tBody.removeChild(tr);
    }
}

function populateTable() {
    var table = document.getElementById('tabela');

    for (var i = 0; i < livros.length; i++) {

        var livro = livros[i];
        var tr = document.createElement('tr');
        var tdName = document.createElement('td');
        var tdQtdPaginas = document.createElement('td');
        var tdAltor = document.createElement('td');
        var tdEditora = document.createElement('td');
        var tdCodigo = document.createElement('td');
        var tdComprar = document.createElement('td');
    
        var btnComprar = createButtonElement('COMPRAR');
        btnComprar.onclick = confirmaCompra;
        tdComprar.appendChild(btnComprar);

        tdName.innerHTML = livro.nome;
        tdQtdPaginas.innerHTML = livro.QtdPaginas;
        tdAltor.innerHTML = livro.altor;
        tdEditora.innerHTML = livro.editora;
        tdCodigo.innerHTML = livro.codigo;
        
        tr.appendChild(tdName);
        tr.appendChild(tdQtdPaginas);
        tr.appendChild(tdAltor);
        tr.appendChild(tdEditora);
        tr.appendChild(tdCodigo);
        tr.appendChild(tdComprar);

        table.tBodies[0].appendChild(tr);
    }
}


function loadDataFromLocalStorage() {
    var livroSaved = localStorage.getItem("Livro");
    if (livroSaved) {
        livros = JSON.parse(livroSaved);
        populateTable();
    }
}

function createButtonElement(value) {
    var button = document.createElement('input');
    button.value = value;
    button.type = 'button';
    button.style.backgroundColor = "lawngreen";
    return button; 
}

function confirmaCompra(){
    location.href=" confirmaCompra.html";
}

