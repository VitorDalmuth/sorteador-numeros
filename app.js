function sortear(){
    let qntd = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    if (!camposValidos(qntd, de, ate)) {
        return; 
    }
    let diferenca = (ate - de);
    if(de >= ate){
        alert('O numero do campo "Do numero" deve ser inferior ao numero do campo "Até o numero". Corrija os campos!');
        limparCampo();
        return;
    }
    if(diferenca < qntd){
        alert('A quantidade de numeros sorteados é maior que a diferença entre os numeros. Corrija os campos!');
        limparCampo();
        return;
    }
    let sorteados = [];
    let numero; 
    
    

    for(i = 0; i < qntd; i++){
        numero = sorteadorNumero(de,ate);
        while(sorteados.includes(numero)){
           numero = sorteadorNumero(de,ate);
        }
        sorteados.push(numero);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo"> Numeros sorteados: ${sorteados}</label>`
    limparCampo();
    alterarStatusBotao();
    return;
}
function sorteadorNumero(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function limparCampo(){
    let qntd = document.getElementById('quantidade').value = '';
    let de = document.getElementById('de').value = '';
    let ate = document.getElementById('ate').value = '';

}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    let botao2 = document.getElementById('btn-sortear');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
    if(botao.classList.contains('container__botao')){
        botao2.classList.add('container__botao-desabilitado');
    }else{
        botao2.classList.remove('container__botao-desabilitado');
    }
}

function reiniciar(){
    let qntd = document.getElementById('quantidade').value = '';
    let de = document.getElementById('de').value = '';
    let ate = document.getElementById('ate').value = '';
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '<label class="texto__paragrafo"> Numeros sorteados: nenhum até agora </label>';
    alterarStatusBotao();

}

function camposValidos(qntd, de, ate) {
    if (isNaN(qntd) || isNaN(de) || isNaN(ate)) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo"> Preencha todos os campos com números válidos!</label>`;
        return false;
    }
    return true;
}

