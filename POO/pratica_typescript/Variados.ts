import {Cliente} from "./Cliente";

export class Variados extends Cliente{

public constructor(nome:string, cpf:string, compra:Array<Produto> = []){

super(nome, cpf, compra);
}
public comprar(){

}