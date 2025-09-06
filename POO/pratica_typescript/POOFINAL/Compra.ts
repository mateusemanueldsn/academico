import { Produto } from "./Produto";

export class Compra{
    private codigo:string;
    private carrinho:number;
    private preco:number;

    public constructor(codigo:string, carrinho:number,preco:number){
        this.codigo = codigo;
        this.carrinho = carrinho;
        this.preco = preco;
    }

    public getCodigo():string{
        return this.codigo;
    }public setCodigo(codigo:string):void{
        this.codigo = codigo;
    }
    public getCarrinho():number{
        return this.carrinho;
    }public setCarrinho(carrinho:number):void{
        this.carrinho = carrinho;
    }
    public getPreco():number{
        return this.preco;
    }public setPreco(preco:number):void{
        this.preco = preco;
    }
}