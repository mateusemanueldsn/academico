import {Midia} from "./Midia";
import {Musica} from "./Musica";
import {Video} from "./Video";
import {PlayList} from "./PlayList";
import {Pilha} from "./Pilha";
import {PilhaImpl} from "./PilhaImpl";

/*
let pl : PlayList = new PlayList();



let m1 : Midia = new Musica("a",1,"a","a");
let m2 : Midia = new Musica("b",2,"b","b");
let m3 : Midia = new Musica("c",3,"c","c");
let m4 : Midia = new Video("v", 4, 5);




pl.addMidia(m1);
pl.addMidia(m2, m3);
pl.addMidia(m4);

for(let m of pl.midias){
    m.executar();
}
*/



let p : Pilha = new PilhaImpl();

/*p.push(3);
p.push(2);
p.push(5);

while(!p.empty()){
    console.log(p.top());
    p.pop();
}*/
p.push(3);
try{
    p.pop();
} catch(ex){
    console.log(ex.message);
    console.log(ex.name);
    console.log("Você não pode remover de uma pilha vazia");
}

// console.log(p.top());
