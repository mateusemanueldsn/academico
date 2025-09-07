import{Pokemon} from "./Pokemon";
import{Agua} from "./Agua";
import {Fogo} from "./Fogo";
import {Grama} from "./Grama";

declare function  require(msg:string):any; 
var readline = require("readline-sync");

export class Batalha{
    private listaPokemon:Array<Pokemon>;

    public constructor( listaPokemon:Array<Pokemon> = []){
        this.listaPokemon = listaPokemon;
    }

    public getLPokemon():Array<Pokemon>{
        return this.listaPokemon;
    }public setLPokemon(LPokemon:Array<Pokemon>):void{
        this.listaPokemon = LPokemon;
    }

    

    
}