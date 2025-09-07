"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor(username) {
        this.username = username;
        this.grupos = [];
    }
    getUser() {
        return this.username;
    }
    setUser(user) {
        this.username = user;
    }
    getGrupos() {
        return this.grupos;
    }
    setGrupos(grupos) {
        this.grupos = grupos;
    }
    mostraDadosUser() {
        let res = "";
        res += "Usuario:" + this.username + ", Grupos:" + this.mostraGrupos();
        return res;
    }
    mostraGrupos() {
        let res = "";
        for (let i of this.grupos) {
            res += i.getNome() + ",";
        }
        return res;
    }
}
exports.Usuario = Usuario;
