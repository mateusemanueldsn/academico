import {Cliente} from "./Cliente";
import {Produto} from "./Produto";
import {Estudante} from "./Estudante";

declare function require(msg :string): any;
var readline = require("readline-sync");


export class Controlador{

    private listaClientes:Array<Cliente>;
    private listaProdutos:Array<Produto>;

        public constructor(listaClientes:Array<Cliente> = [], listaProdutos:Array<Produto> = [] ){
            this.listaClientes = listaClientes;
            this.listaProdutos = listaProdutos;
        }

    public getListaClientes():Array<Cliente>{
        return this.listaClientes;
    }public setListaClientes(clientes:Array<Cliente>):void{
        this.listaClientes = clientes;
    }
    public getListaProdutos():Array<Produto>{
        return this.listaProdutos;
    }public setListaProdutos(produtos:Array<Produto>):void{
        this.listaProdutos = produtos;
    }

    public criarConta(nome:string, cpf:string, categoria: number):number{
        for(let c of this.listaClientes){
            if(this.listaClientes.indexOf(c) != undefined){
                return 1; // usuario ja existe;
            }else{
                this.listaClientes.push(new Cliente(nome,cpf,categoria));
                return 2; // realizado com sucesso
            }
            
        }
    }
    
    public cadProduto(nome:string, codigo:string, quantidade:number, marca:string,preco:number):number{
        for(let p of this.listaProdutos){
            if(this.listaProdutos.indexOf(p) != undefined){
                return 1; // produto ja existe;
            }else{
                this.listaProdutos.push(new Produto(nome,codigo,quantidade,marca,preco));
                return 2; // realizado com sucesso
            }
            
        }
    }

    

    public menuIniciar():void{
        
    }

}