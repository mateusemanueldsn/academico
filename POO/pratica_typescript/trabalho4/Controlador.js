"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Grupo_1 = require("./Grupo");
const Usuario_1 = require("./Usuario");
const Mensagem_1 = require("./Mensagem");
var readline = require("readline-sync");
class Controlador {
    constructor() {
        this.listaGrupos = [];
        this.listaUsuarios = [];
    }
    getUsuarios() {
        return this.listaUsuarios;
    }
    setUsuarios(lUsuarios) {
        this.listaUsuarios = lUsuarios;
    }
    getGrupos() {
        return this.listaGrupos;
    }
    setGrupos(grupos) {
        this.listaGrupos = grupos;
    }
    buscaUsuario(nome) {
        for (let i of this.listaUsuarios) {
            if (i.getUser() == nome) {
                return i;
            }
            return undefined;
        }
    }
    addUser(nome) {
        if (this.buscaUsuario(nome) != undefined) {
            return false; // usuario ja existe
        }
        this.listaUsuarios.push(new Usuario_1.Usuario(nome));
        return true;
    }
    buscaGrupo(nome) {
        for (let i of this.listaGrupos) {
            if (i.getNome() == nome) {
                return i;
            }
            return undefined;
        }
    }
    addGrupo(grupo, pessoa) {
        let a = this.buscaGrupo(grupo);
        let p = this.buscaUsuario(pessoa);
        if (a != undefined) {
            return 1; //grupo ja existente
        }
        else if (p == undefined) {
            return 2; // usuario nao existente
        }
        else {
            let g = new Grupo_1.Grupo(grupo);
            this.listaGrupos.push(g);
            p.getGrupos().push(g);
            return 3;
        }
    }
    addUsuarioGrupo(pessoa, grupo) {
        let p = this.buscaUsuario(pessoa);
        let g = this.buscaGrupo(grupo);
        if (p == undefined) {
            return 1; //pessoa nao existe
        }
        else if (g == undefined) {
            return 2; //grupo nao existe
        }
        else if (g.buscaUsuario(pessoa) != undefined) {
            return 3; //Pessoa ja existe no grupo
        }
        else {
            g.getUsers().push(p);
            p.getGrupos().push(g);
            return 4; //inserido com sucesso
        }
    }
    loseUserGrupo(nome) {
        for (let i = 0; i < this.listaUsuarios.length; i++) {
            if (this.listaUsuarios[i].getUser() == nome) {
                this.listaUsuarios.slice(i, 1);
                return true;
            }
            return false;
        }
    }
    enviaMensagem(grupo, pessoa, texto) {
        let p = this.buscaUsuario(pessoa);
        let g = this.buscaGrupo(grupo);
        if (p == undefined) {
            return 1;
        }
        else if (g == undefined) {
            return 2;
        }
        else if (g.buscaUsuario(pessoa) == undefined) {
            return 3;
        }
        else {
            g.getMensagem().push(new Mensagem_1.Mensagem(p, texto));
            return 0;
        }
    }
    buscaMensagensNovas(pessoa, grupo) {
        let p = this.buscaUsuario(pessoa);
        let g = this.buscaGrupo(grupo);
        let res = [];
        if (p == undefined) {
            console.log("pessoa nao existe");
        }
        else if (g == undefined) {
            console.log("grupo nao existe");
        }
        else if (g.buscaUsuario(pessoa) == undefined) {
            console.log("pessoa nao esta no grupo");
        }
        else {
            for (let m of g.getMensagem()) {
                if (m.buscaLeitor(pessoa) == undefined) {
                    res.push(m);
                    m.getLeitores().push(p);
                }
            }
        }
        return res;
    }
    mostraMensagem(pessoa, grupo) {
        let r = this.buscaMensagensNovas(pessoa, grupo);
        for (let m of r) {
            console.log(m.ToMensagem());
        }
    }
    init() {
        let grupo;
        let usuario;
        let cmd = "";
        let help = "\n1 - Adicionar usuario a lista de contatos\n"
            + "2 - Cria um novo grupo no sistema\n"
            + "3 - Adicionar um novo usuario a um grupo\n"
            + "4 - Pesquisa uma pessoa na lista de contatos\n"
            + "5 - Mostra todas as mensagens de um grupo\n"
            + "6 - Enviar mensagem no grupo\n"
            + "7 - Mostra usuarios e grupos do sistema\n"
            + "8 - Comando para sair de um grupo\n"
            + "9 - Encerra o programa\n";
        while (true) {
            console.log(help);
            cmd = readline.question("Digite um comando:");
            if (cmd == "9") {
                console.log("Ate Breve! :)");
                break;
            }
            switch (cmd) {
                case "1": // ok
                    let u = readline.question("Nome do usuario:");
                    let res1 = this.addUser(u);
                    if (res1 == false) {
                        console.log("Usuario ja existente");
                    }
                    else {
                        console.log("Adicionado com sucesso");
                    }
                    break;
                case "7": // ok
                    if (this.listaUsuarios.length != 0) {
                        for (let i of this.listaUsuarios) {
                            console.log(i.mostraDadosUser());
                        }
                    }
                    else {
                        console.log("Nenhum usuario existente");
                    }
                    break;
                case "2":
                    let ng = readline.question("Nome do Grupo:");
                    let p = readline.question("Insira uma pessoa:");
                    let res = this.addGrupo(ng, p);
                    if (res == 1) {
                        console.log("Grupo ja existe");
                    }
                    else if (res == 2) {
                        console.log("Usuario nao existe");
                    }
                    else {
                        console.log("Deus certo");
                    }
                    break;
                case "3":
                    let userb = readline.question("Nome do Usuario:");
                    let grupb = readline.question("Nome do Grupo:");
                    let resh = this.addUsuarioGrupo(userb, grupb);
                    if (resh == 1) {
                        console.log("usuario nao existe");
                    }
                    else if (resh == 2) {
                        console.log("grupo nao existe");
                    }
                    else if (resh == 3) {
                        console.log("pessoa ja existe no grupo");
                    }
                    else {
                        console.log("adicionado com sucesso");
                    }
                    break;
                case "4":
                    let user = readline.question("Nome do Usuario:");
                    let res5 = this.buscaUsuario(user);
                    if (res5 == undefined) {
                        console.log("Usuario nao existe");
                    }
                    else {
                        for (let i of this.listaUsuarios) {
                            console.log(this.listaUsuarios);
                        }
                    }
                    break;
                case "6":
                    let gru = readline.question("Nome do grupo:");
                    let pes = readline.question("Usuario que esta mandando a mensagem:");
                    let tex = readline.question("Texto da mensagem:");
                    this.enviaMensagem(gru, pes, tex);
                    break;
                case "5":
                    let pess = readline.question("Nome do usuario:");
                    let grup = readline.question("Nome do grupo:");
                    this.mostraMensagem(pess, grup);
                    break;
                case "8":
                    let pesss = readline.question("Nome do Usuario:");
                    let resp = this.loseUserGrupo(pesss);
                    if (resp == true) {
                        console.log("Usuario saiu do grupo");
                    }
                    else {
                        console.log("Usuario permanece no grupo");
                    }
                default:
                    console.log("comando nao existe");
            }
        }
    }
}
exports.Controlador = Controlador;
