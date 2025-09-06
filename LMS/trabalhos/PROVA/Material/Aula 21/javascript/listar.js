function carregarJSON() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status >= 200 && this.status < 300) {
      var listaDeUsuarios = JSON.parse(this.responseText);
      var tabelaBody = document.getElementById("angel").lastElementChild;
      tabelaBody.innerHTML = "";

      for (var i = 0; i < listaDeUsuarios.length; i++) {
        var usuario = listaDeUsuarios[i];

        var td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(usuario._id));

        var td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(usuario.nome));

        var td3 = document.createElement("td");
        td3.appendChild(document.createTextNode(usuario.email));

        var td4 = document.createElement("td");
        td4.appendChild(document.createTextNode(usuario.nascimento));

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        tabelaBody.appendChild(tr);
      }
    }
  };
  xhttp.open("GET", "https://lmsqxd.herokuapp.com/usuarios");
  xhttp.send(null);
}
