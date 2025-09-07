import{Cliente} from "./Cliente";
import{Compra} from "./Compra";
import{Produto} from "./Produto";
import{Bicicleta} from "./Bicicleta";
import{Estudante} from "./Estudante";
import{Skate} from "./Skate";
import{Patins} from "./Patins";
import{Slackline} from "./Slackline";
import{Tenis} from "./Tenis";
import{Variados} from "./Variados";

declare function  require(msg:string):any; 
var readline = require("readline-sync");


export class Loja{
    private clientes:Array<Cliente>;
    private produtos:Array<Produto>;

    public constructor(clientes:Array<Cliente> = [], produtos:Array<Produto> = []){
        this.clientes = clientes;
        this.produtos = produtos;
    }

    public getClientes():Array<Cliente>{
        return this.clientes;
    }public setClientes(clientes:Array<Cliente>):void{
        this.clientes = clientes;
    }
    public getProdutos():Array<Produto>{
        return this.produtos;
    }public setProdutos(produtos:Array<Produto>):void{
        this.produtos = produtos;
    }

    public buscaCliente(cpf:string):boolean{
        for (let i of this.clientes){
            if(i.getCpf() == cpf){
                return true;
            }
            return false;
        }

    }

    public buscaProduto(codigo:string):boolean{
        for (let i of this.produtos){
            if(i.getCodigo() == codigo){
                return true;
            }
            else{
                return false;
            }
        }
        
        
    }
    

    public criarConta(nome:string, cpf:string, compra:Array<Compra>){
        let c:boolean = this.buscaCliente(nome);
        if(c == undefined){
            this.clientes.push(new Cliente(nome, cpf, compra = []));
        }
        else{
           throw new ClientePreExistenteError("Cliente já cadastrado.");
        }  
        
        

    }



    public comprarProduto(codigo:string,quantidade:number){
        let compra:Compra;
        let cliente:Cliente;
        let b:boolean = this.buscaProduto(codigo);
        if(b == true){
            cliente.getCompra() 
        }

    }

    public cadProduto(tipo:number,):string{
        if(tipo == 1){
            let n:string =  readline.question("Digite o nome:");
            let c:string =  readline.question("Digite o codigo:");
            let q:number =  readline.question("Digite a quantidade:");
            let m:string =  readline.question("Digite a marca:");
            let p:number =  readline.question("Digite o preço:");
            let mod:string =  readline.question("Digite o modelo:");
            let ch:string =  readline.question("Digite o chassi:");
            let cat:string =  readline.question("Digite a categoria:");
            let b: Produto = new Bicicleta(n,c,q,m,p,mod,ch,cat);
            this.produtos.push(b);
            return "Bicicleta";
        }
        else if(tipo == 2){
            let n:string =  readline.question("Digite o nome:");
            let c:string =  readline.question("Digite o codigo:");
            let q:number =  readline.question("Digite a quantidade:");
            let m:string =  readline.question("Digite a marca:");
            let p:number =  readline.question("Digite o preço:");
            let est:string =  readline.question("Digite o estilo:");
            let pat: Produto = new Patins(n,c,q,m,p,est);
            this.produtos.push(pat);
            return "Patins";
        }
        else if(tipo == 3){
            let n:string =  readline.question("Digite o nome:");
            let c:string =  readline.question("Digite o codigo:");
            let q:number =  readline.question("Digite a quantidade:");
            let m:string =  readline.question("Digite a marca:");
            let p:number =  readline.question("Digite o preço:");
            let tip:string =  readline.question("Digite o tipo:");
            let skt: Produto = new Skate(n,c,q,m,p,tip);
            this.produtos.push(skt);
            return "Skate";
        }
        else if(tipo == 4){
            let n:string =  readline.question("Digite o nome:");
            let c:string =  readline.question("Digite o codigo:");
            let q:number =  readline.question("Digite a quantidade:");
            let m:string =  readline.question("Digite a marca:");
            let p:number =  readline.question("Digite o preço:");
            let comp:number =  readline.question("Digite o comprimento:");
            let sla: Produto = new Slackline(n,c,q,m,p,comp);
            this.produtos.push(sla);
            return "Slackline";
        }
        else if(tipo == 5){
            let n:string =  readline.question("Digite o nome:");
            let c:string =  readline.question("Digite o codigo:");
            let q:number =  readline.question("Digite a quantidade:");
            let m:string =  readline.question("Digite a marca:");
            let p:number =  readline.question("Digite o preço:");
            let amor:boolean =  readline.question("Com amortecimento?");
            let peso:number =  readline.question("Digite o peso:");
            let ten: Produto = new Tenis(n,c,q,m,p,amor,peso);
            this.produtos.push(ten);
            return "Tênis";
        }

    }
    
    public removerProduto(codigo:string):boolean{
        for(let i: number = 0; i < this.produtos.length; i++){
            if(this.produtos[i].getCodigo() == codigo){
                this.produtos.splice(i,1);
                return true;
            }
            return false;
        }
    }

    public removerCliente(cpf:string):boolean{
        for(let i: number = 0; i < this.produtos.length; i++){
            if(this.clientes[i].getCpf() == cpf){
                this.clientes.splice(i,1);
                return true;
            }
            return false;
        }
    }
            
    public init(){
        let cmd:string = "";
        let loja: Loja;
        let cliente:Cliente;
        let help: string = "\n1 - Criar conta cliente\n"
        +"2 - Cadastrar Produto\n"
        +"3 - Buscar Produto\n"
        +"4 - Buscar Cliente\n"
        //+"5 - Mostrar Clientes\n"
        //+"6 - Mostrar Estoque de produtos\n"
        //+"7 - Remover Cliente\n"
        //+"8 - Remover Produto\n"
        +"9 - Encerra o programa\n";

        while(true){
            cmd = readline.question("Digite um comando");
            if(cmd == "9"){
                console.log("Tchauzinho :)");
                break;
            }
            switch(cmd){
                case "1":
                let n:string = readline.question("Digite o nome:");
                let c:string = readline.question("Digite o CPF:")
                loja.criarConta(n,c,[]);
                break;
                case "5":
                cliente.toString();
                break;
                   
            }
        }

        
    }
}