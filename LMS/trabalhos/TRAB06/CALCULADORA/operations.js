function botao(num){
    var salvo = document.calculadora.result.value;
    document.calculadora.result.value = salvo + num;
}

function calcular(){
    var resul = 0;
    resul = document.getElementById('result').value;
    document.getElementById('result').value = '';
    document.getElementById('result').value = eval(resul);
}

