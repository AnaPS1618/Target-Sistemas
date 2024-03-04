

document.querySelector('#btn-inverter').addEventListener('click', reverterString)


function reverterString() {
    let str = document.querySelector('#string').value
    let resposta = document.querySelector('p')

    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
        
    }

    resposta.innerText += `
    String invertida: ${stringInvertida}
    `
    
}

