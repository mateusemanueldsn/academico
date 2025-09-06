import {Usuario} from "./Usuario";
import { Mensagem } from "./Mensagem";
export class Grupo {
    private nome: string;
    private usuarios:Array<Usuario>;
    private mensagens:Array<Mensagem>;
        
    public constructor(nome:string){
        this.nome = nome;
        this.usuarios = [];
        this.mensagens = [];
       
    }
    public getNome(): string{
        return this.nome;
    }
    public setNome(nome:string): void{
        this.nome = nome;
    }
    public getUsers():Array<Usuario>{
        return this.usuarios;
    }
    public setUsers(users:Array<Usuario>):void{
        this.usuarios = users;
    }
    public getMensagem():Array<Mensagem>{
        return this.mensagens;
    }
    public setMensagem(msg:Array<Mensagem>):void{
        this.mensagens = msg;
    }

    public buscaUsuario(nome:string):Usuario|undefined{
        for (let i of this.usuarios){
            if(i.getUser()==nome){
                return i;
            }
            return undefined;
        }

    }
}