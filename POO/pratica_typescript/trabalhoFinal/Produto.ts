export  class Produto{
    private nome:string;
    private codigo: string;
    private quantidade: number;
    private marca: string;
    private preco: number;

        public constructor(nome:string, codigo:string, quantidade:number, marca:string,preco:number){
            this.codigo = codigo;
            this.nome = nome;
            this.quantidade = quantidade;
            this.marca = marca;
            this.preco = preco;
        }

    public getNome():string{
        return this.nome;
    }public setNome(nome:string):void{
        this.nome = nome;
    }
    public getCodigo():string{
        return this.codigo;
    }public setCodigo(cod:string):void{
        this.codigo = cod;
    }
    public getQuantidade():number{
        return this.quantidade;
    }public setQuantidade(qtd:number):void{
        this.quantidade = qtd;
    }
    public getMarca():string{
        return this.marca;
    }public setMarca(marca:string):void{
        this.marca = marca;
    }
    public getPreco():number{
        return this.preco;
    }public setPreco(preco:number):void{
        this.preco = preco;
    }
}