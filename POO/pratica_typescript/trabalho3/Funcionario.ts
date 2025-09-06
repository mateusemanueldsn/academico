export class Funcionario{
    private diaria: number;
    private nome: string;
    private bonus: number;
        public constructor(nome:string, diaria:number){
            nome = this.nome;
            diaria = this.diaria;
            bonus = 0;
        
        }

        public getNome():string{
            return this.nome;
        }
        public setNome(nome:string):void{
            this.nome = nome;
        }
        public getDiaria():number{
            return this.diaria;
        }
        public setDiaria(diaria:number):void{
            this.diaria = diaria;
        }
        public getBonus(): number{
        	return this.bonus;
        }
        public setBonus(bonus: number):void{
        	this.bonus = bonus;
        }
}
