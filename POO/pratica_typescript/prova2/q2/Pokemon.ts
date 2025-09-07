export abstract class Pokemon{
    private nome: string;
    private nivel:number;
    private tipo: string;

    public constructor(nome:string, nivel:number,tipo:string){
        this.nome = nome;
        this.nivel = nivel;
        this.tipo = tipo;
    }

    public getNome():string{
        return this.nome;
    }public setNome(nome:string):void{
        this.nome = nome;
    }
    public getNivel():number{
        return this.nivel
    }public setNivel(nivel:number):void{
        this.nivel = nivel;
    }
    public getTipo():string{
        return this.tipo;
    }public setTipo(tipo:string):void{
        this.tipo = tipo;
    }

    

}