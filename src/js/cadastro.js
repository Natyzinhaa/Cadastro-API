'use strict'; // Modo restrito

// Verifica se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;

    if(cepValido(cep.value)) {
        const dados = await fetch(url);
        const address = await dados.json();

        // hasOWnProperty rertorna um valor booleano indicado se o objetivo possui a propriedade especifica no parenteses
        if(address.hasOWnProperty('erro')) {
            alert("CEP não encontrado");
        } else {
            preencherFormulario(address);
        }
    }
}

preencherFormulario = (endereco) => {
    
}

// Função para limpar formulário
limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}