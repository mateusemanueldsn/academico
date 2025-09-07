export class PilhaVaziaError implements Error{
    public name : string;
    public message : string;







    public constructor(message : string = ""){
        this.name = "PilhaVaziaError";
        this.message = message;
    }
}