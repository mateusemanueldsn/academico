import { Produto } from "./Produto";
 
export class Bicicleta extends Produto{
    private modalidade: string;

    public constructor(nome:string, codigo:string, quantidade:number, marca:string,preco:number){
        super(nome, codigo, quantidade, marca, preco)
        this.modalidade;
    }
}