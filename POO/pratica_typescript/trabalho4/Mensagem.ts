import {Usuario} from "./Usuario";
export class Mensagem {
    private texto: string;
    private emissor: Usuario;
    private leitores: Array<Usuario>;

    public constructor(emissor:Usuario,texto:string){
        this.texto = texto;
        this.emissor = emissor;
        this.leitores =  [this.emissor];
    }
    
    public getTexto():string{
        return this.texto;
    }
    public setTexto(texto:string):void{
        this.texto = texto;
    }

    public getLeitores():Array<Usuario>{
        return this.leitores;
    }

    public setLeitores(leitores: Array<Usuario>):void{
        this.leitores = leitores;
    }
    public buscaLeitor(nome: string):Usuario | undefined{
        for (let i of this.leitores){
            if(i.getUser() == nome){
                return i;
            }
        }
        return undefined;
    }
    

    public ToMensagem():string{
        let msg = "";
            msg += this.emissor.getUser() +":"+this.texto;
        return msg;
    }
}