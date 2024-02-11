//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 
//e o próximo valor sempre será a soma dos 2 valores anteriores 
//(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
//escreva um programa na linguagem que desejar onde, 
//informado um número, ele calcule a sequência de Fibonacci e 
//retorne uma mensagem avisando se o número informado pertence ou não a sequência.

//IMPORTANTE:
//Esse número pode ser informado através de 
//qualquer entrada de sua preferência ou pode ser 
//previamente definido no código;

document.querySelector('#btn-resposta').addEventListener('click', fibonacci);



function fibonacci() {
    let numeroInformado = Number(document.querySelector('#numeroInformado').value);
    
    if(numeroInformado < 0){
        alert('[ERROR]: Número informado é menor do que zero')
    };

    let pertenceFibonacci = verificarFibonacci(numeroInformado);

    if (pertenceFibonacci) {
        alert(`[SUCESSO]: O número ${numeroInformado} pertence à sequência de Fibonacci.`);
    } else {
        alert(`[ERROR]: O número ${numeroInformado} não pertence à sequência de Fibonacci.`);
    }

    

    
};

function verificarFibonacci(num) {
    let anterior = 0;
    let proximo = 1;

    while (proximo <= num) {
        if (proximo === num) {
            return true;
        }

        let soma = anterior + proximo;
        anterior = proximo;
        proximo = soma;
    }

    return false;
}