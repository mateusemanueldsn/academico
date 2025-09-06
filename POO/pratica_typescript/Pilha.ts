export interface Pilha{
    size() : number; // retona a altura da pilha
    empty() : boolean; // diz se a pilha tá vazia ou nao
    push(valor : number) : void; // insere na pilha
    pop() : void; // remove um elemento da pilha
    // pop pode lançar PilhaVaziaError
    top() : number; // retorna o número no topo da pilha
}

