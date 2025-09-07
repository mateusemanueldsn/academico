export class StringUndefinedError{
    private nome: string;
    private message: string;

    public constructor(nome:string = "StringUndefined", message: string = "Erro: nao se pode manipular uma string indefinida/indexistente"){
        this.nome = nome;
        this.message = message;
    }
}