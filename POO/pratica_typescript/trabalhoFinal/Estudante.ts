import {Cliente} from "./Cliente";
import { Produto } from "./Produto";
export class Estudante extends Cliente{
    private comprovativo: string;  // carteira estudantil ou comprovante de matricula
    private item: Array<Produto>;

        public constructor(nome:string, cpf:string ,categoria:number, comprovativo:string){
            super(nome, cpf,categoria);
            this.comprovativo = comprovativo;
            this.item  = [];
        }
    
    public getComprovativo(): string{
        return this.comprovativo;
    }public setComprovativo(comprovativo:string):void{
        this.comprovativo = comprovativo;
    }
    public comprar(lis[]:Produto){

    }
    

    


}