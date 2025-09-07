import {Midia} from "./Midia";

export class Musica extends Midia {
    public letra : string;
    public autor : string;

    public constructor(nome : string, duracao : number, 
        letra : string, autor : string){
            super(nome, duracao);
            this.autor = autor;
            this.letra = letra;
    }


    public executar() : void {
        console.log("Executando musica " + this.nome);
    }
}