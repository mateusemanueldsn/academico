import {Produto} from "./Produto";

export class Skate extends Produto{
  private tipo: string;

  constructor(nome: string, codigo: string, quantidade: number, marca: string, preco: number, tipo: string){

  super(nome, codigo, quantidade, marca, preco);
  this.tipo = tipo;
  }

  public getTipo():string{
    return this.tipo;
  }public setTipo(tipo:string):void{
    this.tipo = tipo;
  }
}
