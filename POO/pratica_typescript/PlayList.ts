import {Midia} from "./Midia";
import {Musica} from "./Musica";
import {Video} from "./Video";

export class PlayList{
    public midias : Midia[];



    public constructor(){
        this.midias = [];
    }

    


    public addMidia(m1 : Midia, m2 : Midia = undefined) : void {
        this.midias.push(m1);
        if(m2 != undefined) this.midias.push(m2);
    }
}