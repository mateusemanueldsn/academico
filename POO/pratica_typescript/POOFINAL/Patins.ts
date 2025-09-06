import {Produto} from "./Produto";

export class Patins extends Produto{
  private estilo: string;
  
  constructor(nome: string, codigo: string, quantidade: number, marca: string, preco: number, estilo: string){

  super(nome, codigo, quantidade, marca, preco);
  this.estilo = estilo;
  }

  public getEstilo():string{
    return this.estilo;
  }public setEstilo(estilo:string):void{
    this.estilo = estilo;
  }
}
