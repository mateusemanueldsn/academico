export class Veiculo{
    tanque: number;
    kilometragem: number;
    lotacao: number;

    constructor(){
        this.tanque = 0;
        this.kilometragem = 0;
        this.lotacao = 0;
    }

    mostrar(): string{
        let mostrar: string='';
        mostrar += "" + this.tanque + " L: " + this.kilometragem + " Km: " + this.lotacao + " Pessoas";
        return mostrar;
    }

    entrar(): boolean{
        if (this.lotacao < 2){
            this.lotacao += 1;
            return true;
        }else{
            return false;
        }
    }
    sair(): boolean{
        if (this.lotacao == 0){
            return false;
        }else{
            this.lotacao -= 1;
            return true;
        }
    }
    armazenar(valLitros: number): void{
        this.tanque += valLitros;
        if (this.tanque > 10){
            this.tanque = 10;
        }
    }

    locomover(distancia: number): boolean{
        let gasto:number = distancia/10;
        if (this.tanque >= gasto){
            this.tanque -= gasto;
            this.kilometragem += distancia;
            return true;
        }else{
            console.log('O veiculo nao possui combustivel suficiente para iniciar a viagem');
            return false;
        }
    }

}