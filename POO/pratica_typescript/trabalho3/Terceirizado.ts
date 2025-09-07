import { Funcionario } from "./Funcionario";

export class Terceirizado extends Funcionario{
    private horas:number;
    private insalubre:boolean;
        public constructor(horas:number,insalubre:boolean,nome:string, diaria:number){
            super(nome, diaria);
            this.horas = horas;
            this.insalubre = insalubre;
        }

    public getHoras():number{
        return this.horas;
    }    
    public sethoras(horas:number):void{
        this.horas = horas;
    }
    public getInsalubre():boolean{
        return this.insalubre;
    }
    public setInsalubre(insa:boolean):void{
        this.insalubre = insa;
    }

    public calcSalario():number{
        let salario:number =  4 * this.horas;
        if (this.insalubre){
            salario += 500;
            return salario;
        }

    }
    public toString():string{
		if (this.insalubre){
			return "Ter " + this.getNome()+ " horas " + this.getHoras() +" insalubre \nsalario " + this.calcSalario();
		}
    	return "Ter " + this.getNome()+ " horas " + this.getHoras() +" nao insalubre \nsalario " + this.calcSalario();
    }
}    

