import {Veiculo} from "./Carro";
declare function require(name:string): any;
var readline = require('readline-sync');
    
let car1: Veiculo = new Veiculo();

let opcao : string = "";
let aux : string = ""; 
let help: string ="" + "mostrar: comando para mostrar status do veiculo\n" +
"entrar:comando para embarcar passageiro no carro \n" +
"desembarcar: comando para retirar passageiro do veiculo \n" +
"abastecer: comando para armazenar gasolina no tamque do carro \n" +
"andar: comando ue define a distancia que o carro percorrera\n" +
"parar: comando para finalizar o programa\n" ;

while(true){
    console.log(help);
    opcao = readline.question(" Digite um comando:");
    if (opcao == "parar"){
        console.log('Tchauzinho!');
        break;
    }
    if (opcao == 'mostrar'){
        console.log(car1.mostrar());
    }
    switch(opcao){
        case "entrar":
            if( car1.entrar() ){
                console.log("Embarcado");
            }else{
                console.log("lotado");
            }
            break;
        case "desembarcar":
            car1.sair();
            break;
        case "abastecer":
            aux = readline.question("Digite o valor:");
            car1.armazenar(parseFloat(aux));
            break;
        case "andar":
            aux = readline.question("Digite a distancia a ser percorrida:");
            car1.locomover(parseFloat(aux));
            break;
        default:
            console.log('Comando invalido');
            break;
    }



}


