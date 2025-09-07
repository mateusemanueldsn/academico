import{Professor} from "./Professor";
import{STA} from "./STA";
import{Terceirizado} from "./Terceirizado";
import { Funcionario } from "./Funcionario";

declare function require(msg : string) : any;
var readline = require('readline-sync');

let funcionarios: Array<Funcionario> = [];
let comando:string = "";
let bonusGeral:number = 0;

	public function CalcBonus(funcionarios,bonusGeral):void{
		for (let i of funcionarios){
			i.setBonus(bonusGeral/funcionarios.length);
		}
	}

while (true) {
	comando = readline.question("Digite um comando:");
    if (comando == "sair"){
        break;
    }
    switch(comando){
        case "addProf":
            let n: string = readline.question("Digite o nome:");
            let c: string = readline.question("Informe a categoria:");
            let prof: Professor = new Professor(n, c, 0);
            funcionarios.push(prof);
            break;
        case "addSta":
        	let n: string = readline.question("Digite o nome:");
            let c: string = readline.question("Informe a categoria:");
            let niv: number = (parseInt(readline.question("Digiteo nivel:")));
            let sta: STA = new STA(nv,n, c, 0);
            funcionarios.push(sta);
            break;
         case "addTer":
         	let h: number = (parseInt(readline.question("Digite as horas:")));
         	let i: boolean;
         	if(readline.question("E insalubre:") == "sim"){
         		i = true;
         	}else{
         		i = false;
         	}
         	let n: string = readline.question("Digite o nome:");
         	let ter:Terceirizado = new Terceirizado(h, i, n, 0);
         	funcionarios.push(ter);
         	break;
         case "show":
         	let nome: string = readline.question("Digite o nome:");
     		let func: Funcionario = undefined;
     		for (let i of funcionarios){
     			if (i.getNome() == nome){
     				func = i;
     			}
     		}
     		if(func == undefined){
     			console.log("Nao existe");

     		}else{
     			if(func instanceof Professor ){    // O instanceof C,   instaceof testa se o objeto O eh da classe C, retorna true se for, false caso contrario
     				let prof: Professor = func;
     				console.log(prof.toString());
     			}else if (func instanceof STA){
     				let sta: STA = func;
     				cosnole.log(sta.toString());
     			}else if (func instanceof Terceirizado){
     				let terce: Terceirizado = func;
     				console.log(toString());
     			}
     		}
     		break;
     		case "rm":
     			let nome: string = readline.question("Digite o nome:");
     			let indice:number = -1;
     			for(let i = 0, i < funcionario.length; i++){
     				if (funcionarios[i].getNome() == nome){
     					indice = i;
     				}
     			}
     			if (indice == -1){
     				console.log("Nao existe");
     			}else{
     				funcionarios.slice(indice, 1);
     				console.log("removido com sucesso");
     			}
     			break;
     		case "setBonus":
     			let b: parseFloat(readline.question("Digite o valor do bonus:"));
     			CalcBonus(funcionarios,b);

    }
}

