import {Produto} from "./Produto";

export class Slackline extends Produto{
  private comprimento: number;
  
  constructor(nome: string, codigo: string, quantidade: number, marca: string, preco: number, comprimento: number){
 
  super(nome, codigo, quantidade, marca, preco);
  this.comprimento = comprimento;
  }

  public getComprimento():number{
    return this.comprimento;
  }public setComprimento(comprimento:number):void{
    this.comprimento = comprimento;
  }
}
