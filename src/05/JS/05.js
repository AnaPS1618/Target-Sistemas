//5) Escreva um programa que inverta os caracteres de um string.

//IMPORTANTE:
//a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
//b) Evite usar funções prontas, como, por exemplo, reverse;

document.querySelector('#btn-inverter').addEventListener('click', reverterString)


function reverterString() {
    let str = document.querySelector('#string').value
    let resposta = document.querySelector('p')

    let stringInvertida = '';
    for (var i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
        
    }

    resposta.innerText += `
    String invertida: ${stringInvertida}
    `
    
}

