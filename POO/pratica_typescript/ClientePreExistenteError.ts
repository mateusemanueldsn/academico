class ClientePreExistenteError implements Error{
  public name: string;
  public message: string;
  public constructor(message:string){
    this.name = "ClienteError";
    this.message = "Cliente já cadastrado.";
  }
  public toString(): string{
    return this.name+ ": " +this.message;
  }
}