class ProdutoInexistenteError implements Error{
  public name: string;
  public message: string;
  public constructor(message:string){
    this.name = "EstoqueError";
    this.message = message;
  }
  public toString(): string{
    return this.name+ ": " +this.message;
  }
}