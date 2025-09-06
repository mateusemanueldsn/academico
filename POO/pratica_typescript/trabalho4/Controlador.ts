import {Grupo} from "./Grupo";
import {Usuario} from "./Usuario";
import {Mensagem} from "./Mensagem";

declare function require(msg :string): any;
var readline = require("readline-sync");

export class Controlador{
    listaGrupos: Array<Grupo>;
    listaUsuarios: Array<Usuario>;
    
    public constructor(){
        this.listaGrupos = [];
        this.listaUsuarios = [];
    }

    public getUsuarios(): Array<Usuario>{
        return this.listaUsuarios;
    }

    public setUsuarios(lUsuarios:Array<Usuario>):void{
        this.listaUsuarios = lUsuarios;
    }

    public getGrupos():Array<Grupo>{
        return this.listaGrupos;
    }
    public setGrupos(grupos:Array<Grupo>):void{
        this.listaGrupos = grupos;
    }

    public buscaUsuario(nome:string):Usuario|undefined{
        for (let i of this.listaUsuarios){
            if(i.getUser() == nome){
                return i;
            }
            return undefined;
        }

    }

    public addUser(nome:string):boolean{
        if(this.buscaUsuario(nome) != undefined){
            return false; // usuario ja existe
        }
        this.listaUsuarios.push(new Usuario(nome));
        return true; 
    
    }


    public buscaGrupo(nome:string):Grupo|undefined{
        for(let i of this.listaGrupos){
            if(i.getNome() == nome){
                return i;
            }
            return undefined;
        }
    }

    

    public addGrupo(grupo:string, pessoa: string):number{
        let a: Grupo = this.buscaGrupo(grupo);
        let p: Usuario = this.buscaUsuario(pessoa);
        if(a != undefined){
            return 1; //grupo ja existente
        }else if(p == undefined){
            return 2; // usuario nao existente
        }else{
            let g:Grupo = new Grupo(grupo);
            this.listaGrupos.push(g);
            p.getGrupos().push(g);
            return 3;
        }
    }

    public addUsuarioGrupo( pessoa:string, grupo:string):number{ 
        let p:Usuario = this.buscaUsuario(pessoa);
        let g: Grupo = this.buscaGrupo(grupo); 
        if (p == undefined ){
           return 1; //pessoa nao existe
        }else if(g == undefined){
           return 2;//grupo nao existe
        }else if(g.buscaUsuario(pessoa) != undefined){
           return 3; //Pessoa ja existe no grupo
        }else{
            g.getUsers().push(p);
            p.getGrupos().push(g);
            return 4; //inserido com sucesso
        }
    }
    public loseUserGrupo(nome:string):boolean{
        for(let i = 0; i < this.listaUsuarios.length; i++){
            if(this.listaUsuarios[i].getUser() == nome){
                this.listaUsuarios.slice(i, 1);
                return true;
            }
            return false;
        }
    }

    public enviaMensagem(grupo:string, pessoa:string, texto:string):number{
        let p: Usuario = this.buscaUsuario(pessoa);
        let g: Grupo = this.buscaGrupo(grupo);
        if(p == undefined){
            return 1;
        }else if (g == undefined){
            return 2;
        }else if(g.buscaUsuario(pessoa)== undefined){
            return 3;
        }else{
            g.getMensagem().push(new Mensagem(p, texto));
            return 0;
        }
    }
    
    public buscaMensagensNovas(pessoa:string,grupo:string):Mensagem[]{
        let p: Usuario = this.buscaUsuario(pessoa);
        let g: Grupo = this.buscaGrupo(grupo);
        let res: Mensagem[] = [];
        if(p==undefined){
            console.log("pessoa nao existe");
        } else if (g == undefined){
            console.log("grupo nao existe");
        } else if(g.buscaUsuario(pessoa) == undefined){
            console.log("pessoa nao esta no grupo");
        } else {
            for (let m of g.getMensagem()){
                if(m.buscaLeitor(pessoa) == undefined){
                    res.push(m);
                    m.getLeitores().push(p);
                }
            }
        }
        return res;
    }

    public mostraMensagem(pessoa:string, grupo):void{
        let r:Mensagem[] = this.buscaMensagensNovas(pessoa,grupo);
        for(let m of r){
            console.log(m.ToMensagem());
        }
    }
    public init(){ 
        let grupo: Grupo;
        let usuario: Usuario;
        let cmd:string = "";
        let help: string = "\n1 - Adicionar usuario a lista de contatos\n"
        +"2 - Cria um novo grupo no sistema\n"
        +"3 - Adicionar um novo usuario a um grupo\n"
        +"4 - Pesquisa uma pessoa na lista de contatos\n"
        +"5 - Mostra todas as mensagens de um grupo\n"
        +"6 - Enviar mensagem no grupo\n"
        +"7 - Mostra usuarios e grupos do sistema\n"
        +"8 - Comando para sair de um grupo\n"
        +"9 - Encerra o programa\n";

    while(true){
        console.log(help);
        cmd = readline.question("Digite um comando:");
        if(cmd == "9"){
            console.log("Ate Breve! :)");
            break;
        }
        switch(cmd){
            case "1": // ok
                let u: string = readline.question("Nome do usuario:");
                let res1: boolean = this.addUser(u);
                if(res1 == false){
                    console.log("Usuario ja existente");
                }else{
                    console.log("Adicionado com sucesso");
                }
                break;
            case "7": // ok
                if(this.listaUsuarios.length != 0){
                    for(let i of this.listaUsuarios){
                        console.log(i.mostraDadosUser());
                    }
                } else{
                    console.log("Nenhum usuario existente");
                }
                break;
            case "2":
                let ng:string = readline.question("Nome do Grupo:");
                let p:string = readline.question("Insira uma pessoa:");
                let res: number = this.addGrupo(ng,p); 
                if(res == 1){
                    console.log("Grupo ja existe");
                }else if(res == 2){
                    console.log("Usuario nao existe");
                }else{
                    console.log("Deus certo");
                }
                break;
            case "3":
                let userb: string = readline.question("Nome do Usuario:");
                let grupb: string = readline.question("Nome do Grupo:");
                let resh: number = this.addUsuarioGrupo(userb,grupb);
                if(resh == 1){
                    console.log("usuario nao existe");
                }else if (resh == 2){
                    console.log("grupo nao existe");
                }else if(resh == 3){
                    console.log("pessoa ja existe no grupo");
                }else{
                    console.log("adicionado com sucesso");
                }
                break;
            case "4":
                let user:string = readline.question("Nome do Usuario:");
                let res5: Usuario = this.buscaUsuario(user);
                if (res5 == undefined){
                    console.log("Usuario nao existe");
                }else{
                    for(let i of this.listaUsuarios){
                        console.log(this.listaUsuarios);
                    }
                }
                break;
            case "6":
                let gru: string = readline.question("Nome do grupo:");
                let pes: string = readline.question("Usuario que esta mandando a mensagem:");
                let tex: string = readline.question("Texto da mensagem:");
                this.enviaMensagem(gru,pes,tex);
                break;
            case "5":
                let pess: string = readline.question("Nome do usuario:");
                let grup: string = readline.question("Nome do grupo:");
                this.mostraMensagem(pess,grup);
                break;
            case "8":
                let pesss: string = readline.question("Nome do Usuario:");
                let resp: boolean = this.loseUserGrupo(pesss);
                if(resp == true){
                    console.log ("Usuario saiu do grupo");
                }else{
                    console.log("Usuario permanece no grupo");
                }
            default:
                console.log("comando nao existe");
            }
        }
    }
    
    
}