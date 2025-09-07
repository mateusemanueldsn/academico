"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mensagem {
    constructor(emissor, texto) {
        this.texto = texto;
        this.emissor = emissor;
        this.leitores = [this.emissor];
    }
    getTexto() {
        return this.texto;
    }
    setTexto(texto) {
        this.texto = texto;
    }
    getLeitores() {
        return this.leitores;
    }
    setLeitores(leitores) {
        this.leitores = leitores;
    }
    buscaLeitor(nome) {
        for (let i of this.leitores) {
            if (i.getUser() == nome) {
                return i;
            }
        }
        return undefined;
    }
    ToMensagem() {
        let msg = "";
        msg += this.emissor.getUser() + ":" + this.texto;
        return msg;
    }
}
exports.Mensagem = Mensagem;
