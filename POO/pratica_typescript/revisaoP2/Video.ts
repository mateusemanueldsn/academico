import {Midia} from "./Midia";

export class Video extends Midia {
    public resolucao : number;




    public constructor(nome : string, duracao : number, 
        resolucao : number){
        super(nome, duracao);
        this.resolucao = resolucao;
    }


    public executar() : void {
        console.log("Executando o video " + this.nome);
    }
}