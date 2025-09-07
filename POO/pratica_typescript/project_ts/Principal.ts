declare function require(msg: string): any;
var readline = require('readline-sync');


let variavel = readline.question("Digite uma string:");
console.log(variavel);