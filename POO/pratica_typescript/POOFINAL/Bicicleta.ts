import {Produto} from "./Produto";

export class Bicicleta extends Produto{
  private modelo: string;
  private chassi: string;
  private categoria: string;

  public constructor(nome: string, codigo: string, quantidade: number, marca: string, preco: number,
  modelo: string ,chassi: string, categoria: string){
  
  super(nome, codigo, quantidade, marca, preco);
  this.modelo = modelo;
  this.chassi = chassi;
  this.categoria = categoria;
  }

  public getModelo():string{
    return this.modelo;
  }public setModelo(modelo:string):void{
    this.modelo = modelo;
  }
  public getChassi():string{
    return this.chassi;
  }public setChassi(chassi:string):void{
    this.chassi = chassi;
  }
  public getCategoria():string{
    return this.categoria;
  }public setCategoria(categoria:string):void{
    this.categoria = categoria;
  }
}
