import {Mensagem} from "./Mensagem";
import { Grupo } from "./Grupo";
export class Usuario{
    private username: string;
    private grupos: Array<Grupo>;
        
        public constructor(username:string){
            this.username = username;
            this.grupos = [];
        }
    
    public getUser():string{
        return this.username;
    }
    public setUser(user:string):void{
        this.username = user;
    }
    public getGrupos():Grupo[]{
        return this.grupos;
    }
    public setGrupos(grupos:Array<Grupo>):void{
        this.grupos = grupos;
    }

    public mostraDadosUser():string{
        let res = "";
        res += "Usuario:"+this.username +", Grupos:"+this.mostraGrupos();
        return res;
    }

    public mostraGrupos():string{
        let res:string = "";
        for(let i of this.grupos){
            res += i.getNome() + ",";
        }
        return res; 
    }
   
}