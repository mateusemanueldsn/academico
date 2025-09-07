import { Produto } from "./Produto";

export  abstract class Cliente{
    private nome:string;
    private cpf: string;
    private categoria: number; // 1 - Estudante / 2 - Outros

        public constructor(nome:string,cpf:string,categoria:number){
            this.nome = nome;
            this.cpf = cpf;
            this.categoria = categoria;

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
    }
    public getCategoria():number{
        return this.categoria;
    }public setCategoria(categoria:number):void{
        this.categoria = categoria;
    }
    public abstract comprar(lis[]:Produto)
    
}