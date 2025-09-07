import {Cliente} from "./Cliente";
export class Cinema{
    private clientes: Array<Cliente>;
    private lotacao: number;
        public constructor(lotacao: number){
            this.clientes = [];
            this.lotacao = lotacao;
        }
    
    public getClientes():Array<Cliente>{
        return this.clientes;
    }
    public setClientes(clien: Array<Cliente>):void{
        this.clientes = clien;
    }
    public getLotacao():number{
        return this.lotacao;
    }
    public setLotacao(lotar:number):void{
        this.lotacao = lotar;
    }
    
    public mostrarAcentos():string{
        let resposta: string = "[";
        
        for (let i:number = 0; i < this.lotacao; i++){
            if(this.clientes[i] == undefined){
                resposta += "- ";
            }else{
                resposta += this.clientes[i].toString();
            }
        }
        return resposta + "]";
    }
    public reservaCliente(id: number, telefone: string, cadeira:number):boolean{
        cadeira--;
        if (this.clientes[cadeira] != undefined){
           return false;
        }
        this.clientes[cadeira] = new Cliente(id,telefone);
        return true;
    }
    public calcelaReserva(id:number):boolean{
        for(let i= 0; i < this.lotacao; i++){
            if (this.clientes[i] != undefined && this.clientes[i].getId() == id){
                this.clientes[i] = undefined;    
                return true;
            }
        }
        return false;
    }
}