import {Produto} from "./Produto";

export class Tenis extends Produto{
  private amortecimento: boolean;
  private peso: number;

  constructor(nome: string, codigo: string, quantidade: number, marca: string, preco: number,
  amortecimento: boolean, peso : number){

  super(nome, codigo, quantidade, marca, preco);
  this.amortecimento = amortecimento;
  this.peso = peso;
  }

  public getAmortecimento():boolean{
    return this.amortecimento;
  }public setAmortecimento(amortecimento:boolean):void{
    this.amortecimento =amortecimento;
  }
  public getPeso():number{
    return this.peso;
  }public setPeso(peso:number):void{
    this.peso = peso;
  }
}
