import {Pilha} from "./Pilha";
import {PilhaVaziaError} from "./PilhaVaziaError";

export class PilhaImpl implements Pilha {

    private base : number[];
    public constructor(){
        this.base = [];
    }

    public size() : number {
        return this.base.length;
    }
    public empty() : boolean {
        return (this.base.length==0);
    }
    public push(valor : number) : void {
        this.base.unshift(valor);
    }
    public pop() : void {
        if(this.empty()) {
            throw new PilhaVaziaError("pilha vazia");
        } else {
            this.base.shift();
        }
    }
    public top() : number {
        return this.base[0];
    }
}