

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
