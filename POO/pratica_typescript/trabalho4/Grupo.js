"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Grupo {
    constructor(nome) {
        this.nome = nome;
        this.usuarios = [];
        this.mensagens = [];
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getUsers() {
        return this.usuarios;
    }
    setUsers(users) {
        this.usuarios = users;
    }
    getMensagem() {
        return this.mensagens;
    }
    setMensagem(msg) {
        this.mensagens = msg;
    }
    buscaUsuario(nome) {
        for (let i of this.usuarios) {
            if (i.getUser() == nome) {
                return i;
            }
            return undefined;
        }
    }
}
exports.Grupo = Grupo;
