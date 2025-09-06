import { Pokemon } from "./Pokemon";

export class Grama extends Pokemon{
    private forca: number;

    public constructor(nome:string, nivel:number, tipo:string, forca:number){
        super(nome,nivel,tipo);
        this.forca = forca;
    }

    public getForca():number{
        return this.forca;
    }public setForca(forca:number):void{
        this.forca = forca;
    }
}