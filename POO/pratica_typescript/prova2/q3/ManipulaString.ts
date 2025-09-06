export interface ManipulaString{

    concatena(s1: string,s2:string): string; // recebe duas strings e retorna a concatenação das duas.
    tamanho(s:string): number; // recebe uma string e retorna o tamanho da string.
    quebra(s:string):Array<string>; // recebe uma string de varias palavras separadas por espaco e a quebra em um Array de strings.
    iguais(s1:string, s2:string):boolean; // recebe duas strings e retorna se elas sao iguais.
}