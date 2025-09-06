export class Cliente{
    private id: number;
    private telefone: string;
        public constructor(id: number, telefone: string){
            this.id = id;
            this.telefone = telefone;
        }
        public getId():number{
            return this.id;
        }
        public setId(id: number):void{
            this.id = id;
        }
        public getTelefone():string{
            return this.telefone;
        }
        public setTelefone(tel: string):void{
            this.telefone = tel;
        }

        public toString():string{
            let S = "";
            S += "ID:"+this.id+":"+this.telefone;
            return S;
        }
}