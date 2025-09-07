import { ADICIONAR_POSTAGEM } from "../Cosntants";

export function adicionarPostagem(payload){
    return {type: ADICIONAR_POSTAGEM ,payload:payload}
}