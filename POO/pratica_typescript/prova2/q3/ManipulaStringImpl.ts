import { ManipulaString } from "./ManipulaString";
import {StringUndefinedError} from "./StringUndefinedError";

export class ManipulaStringImpl implements ManipulaString{

    public concatena(s1: string, s2: string):string{
        let concatenador:string = "";
        concatenador = (s1+s2);
        return concatenador;
    }
    public tamanho(s:string):number{
        let tamanho: number = s.length;
        return tamanho;
    }
    public quebra(s:string):Array<String>{
        if(s != undefined){
            let lista:Array<string> = []; 
            s.split;
            for(let i of lista){
                lista.push(s);
            }
            return lista;
        }else{
            try{

            }catch(ex){
                console.log(StringUndefinedError);
            }
        }
        
    }
}