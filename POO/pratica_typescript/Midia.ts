export abstract class Midia{
    public nome : string;
    public duracao : number;

    public constructor(nome : string, duracao : number){
        this.nome = nome;
        this.duracao = duracao;
    }


    public abstract executar() : void;
}