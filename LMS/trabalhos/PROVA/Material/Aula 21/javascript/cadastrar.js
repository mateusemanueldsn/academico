class Usuario {
  constructor(nome, email, nascimento) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
  }
}

function salvar() {
  var _nome = document.getElementById("nome").value;
  var _email = document.getElementById("email").value;
  var _nascimento = document.getElementById("nascimento").value;

  var usuario = new Usuario(_nome, _email, _nascimento);
  var usuarioJSON = JSON.stringify(usuario);
  enviar(usuarioJSON);
}

function enviar(usuarioJSON) {
  var elemento = document.getElementById("angel");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status >= 200 && this.status < 300) {
        elemento.innerHTML = "Objeto cadastrado com sucesso!";
      } else {
        elemento.innerHTML = "Erro ao cadastrar usuário!";
      }
    }
  };

  xhttp.open("POST", "https://lmsqxd.herokuapp.com/usuarios");
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(usuarioJSON);
}
