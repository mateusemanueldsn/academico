import {Produto} from "./Produto";

export class Cliente{
    private nome:string;
    private cpf:string;
    private compra: Array<Produto>;

    public constructor(nome:string, cpf:string, compra:Array<Produto> = []){
        this.nome = nome;
        this.cpf = cpf;
        this.compra = compra;
    }

    public getNome():string{
        return this.nome;
    }public setNome(nome:string):void{
        this.nome = nome;
    }
    public getCpf():string{
        return this.cpf;
    }public setCpf(cpf:string):void{
        this.cpf = cpf;
    }public getCompra():Array<Produto>{
        return this.compra;
    }public setCompra(compra:Array<Produto>):void{
        this.compra = compra;
    }

    public toString():string{
        let c = "";
        c += "Nome"+this.nome+" ,CPF:"+this.cpf+" ,Carrinho"+this.compra;
        return c;

    }
    

}