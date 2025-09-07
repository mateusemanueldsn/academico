import {Cliente} from "./Cliente";
import {Produto} from "./Produto";

export class Estudante extends Cliente{
private comprovativo : string;

  public constructor(nome:string, cpf:string, compra:Array<Produto> = [], comprovativo:string){
  super(nome, cpf, compra);
  this.comprovativo = comprovativo;
  
  }
  
  public getComprovativo():string{
    return this.comprovativo;
  }public setComprovativo(comprovativo:string):void{
    this.comprovativo = comprovativo;
  }
  public comprar(){
  }
}