function excluir() {
  var id = document.getElementById("id").value;
  var elemento = document.getElementById("angel");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status >= 200 && this.status < 300) {
        elemento.innerHTML = "Objeto excluído com sucesso!";
      } else {
        elemento.innerHTML = "Erro ao excluir contato!";
      }
    }
  };
  xhttp.open("DELETE", "https://lmsqxd.herokuapp.com/usuarios/" + id);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(null);
}
