import { Pokemon } from "./Pokemon";

export class Fogo extends Pokemon{
    private temperatura: number;

    public constructor(nome:string, nivel:number, tipo: string ,temperatura:number){
        super(nome,nivel,tipo);
        this.temperatura = temperatura;
    }

    public getTemperatura():number{
        return this.temperatura;
    }public setTemperatura(temperatura:number):void{
        this.temperatura = temperatura;
    }

    public atacar(temperatura: number, nivel:number, tipo:string):number{
        let dano:number = (temperatura * nivel);
        if(tipo == "Agua"){
            dano += 2;
        }else if (tipo == "Grama"){
            dano += 0.5;
        }
        return dano;
    }
}