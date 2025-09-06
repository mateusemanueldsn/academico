import { Funcionario } from "./Funcionario";

export class Professor extends Funcionario{
    private classe:string;
        public constructor(nome:string, classe:string ,diaria:number){
            super(nome,diaria);
            this.classe = classe;
        }
        
        public getCategoria():string{
            return this.classe;
        }

        public setCategoria(categ:string):void{
            this.classe = categ;
        }
        
        public calcSalario():number{
            if (this.classe == "A"){
                return 3000 + this.getDiaria()*100;
            }else if (this.classe == "B"){
                return 5000 + this.getDiaria()*100;
            }else if (this.classe == "C"){
                return 7000 + this.getDiaria()*100;
            }else if(this.classe == "D"){
                return 9000 + this.getDiaria()*100;
            }else if (this.classe == "E"){
                return 11000 + this.getDiaria()*100;
            }
        }

        public adicionarDiaria():boolean{
        	if (this.getDiaria() < 2){
        		this.setDiaria(this.getDiaria()+1);
        		return true;
        	}else{
        		return false;
        	}
        }

        public toString():string{
        	return "Prof " + this.getNome()+ "  classe " + this.classe +"\nsalario " + this.calcSalario();
        }

}
