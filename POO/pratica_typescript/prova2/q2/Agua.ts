import{Pokemon} from "./Pokemon";

export class Agua extends Pokemon{
    private velocidade: number;

    public constructor(nome:string, nivel:number, tipo:string, velocidade:number){
        super(nome,nivel,tipo);
        this.velocidade = velocidade;
    }

    public getVelocidade():number{
        return this.velocidade;
    }public setVelocidade(velocidade:number):void{
        this.velocidade = velocidade;
    }

    public atacar(velocidade:number, nivel:number, tipo:string):number{
        let dano:number = (velocidade * nivel);
        return dano;

    }
}