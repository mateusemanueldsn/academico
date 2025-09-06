import {Cinema} from "./Cinema";
import {Cliente} from "./Cliente";

declare function require(msg :string): any;
var readline = require("readline-sync");

let help = "Comandos do programa:\n"
+"[1] - Comando para iniciar/liberar uma nova sala de cinema\n"
+"[2] - Comando de mostrar o estado da sala de cinema\n"
+"[3] - Comando para reservar acento para um cliente na sala\n"
+"[4] - Comando de cancelar reserva do cliente na sala de cinema\n"
+"[5] - Comando para sair do programa\n";


let sala: Cinema = new Cinema(0);
let cliente: Cliente = new Cliente(0,"");
let cmd: string= "";
let Qtd: number;

while(true){
    console.log(help);
    cmd = readline.question("Digite um comando:");
        if (cmd == "5"){
            console.log("Ate mais abestado!");
            break;
        }
        switch(cmd){
            case "1":
                Qtd = parseInt(readline.question("Quantidade de acentos:"));
                sala = new Cinema(Qtd);
                console.log("Sala liberada com "+Qtd+" acentos");
                break;     
            case "2":
                console.log(sala.mostrarAcentos());
                break;
            case "3":
                let id: number = parseInt(readline.question("Digite seu ID:"));
                let telefone: string = (readline.question("Digite seu telefone:"));
                let acento: number = (parseInt(readline.question("Numero da cadeira:")));
                if(sala.reservaCliente(id,telefone,acento) == true){
                    console.log("Reserva concluída");
                }else{
                    console.log("Cadeira ocupada!");
                }
                break;
            case "4":
                let id2: number = parseInt(readline.question("Digite seu ID:"));
                if(sala.calcelaReserva(id2)){
                    console.log("Reserva cancelada");
                }
                break;
            default:
                break;

        }
        
    
}