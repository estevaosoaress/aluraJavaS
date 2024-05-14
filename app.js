let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); // o numeroEscolhido vai ser o numero aleatorio
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; // quando falamos de length, é sobre o tamanho de algo

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];

    }


    if (listaDeNumerosSorteados.includes(numeroEscolhido)){ // verificar se na lista já tem o numeroEscolhido que é o que foi gerado aleatoriamente
        return gerarNumeroAleatorio(); // se o numero ja foi sorteado vai retornar para que seja gerado um novo numero, por exemplo: se foi sorteado o numero 3, ele só será sorteado de novo depois de todos os outros números da lista, no caso * 4 + 1
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido); // o push vai fazer com que o numeroEscolhido seja adcionado ao final da lista -- imprime a lista de numeros sorteados no console
        console.log(listaDeNumerosSorteados); // é importante para ver se a função está funcionando como o esperado
        return numeroEscolhido; // o numero gerado é retornado pela função

    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
