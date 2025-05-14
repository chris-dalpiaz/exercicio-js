function dizerOla() {
    //Console.log para escrever na tela
    console.log("botao clicado");
    //altert serve para dar o botão de alerta no navegador
    alert("OLÁAAAAAAAAA!!!");
}

function valorDigitado() {
    //const é um tipo de variável que não muda o valor
    //document seria o html, getElementById serve para pegar um elemento de um ID específico
    const campoValor = document.getElementById("campo_valor");
    //atribuindo o input do usuário a variável valor
    const valor = campoValor.value;
    //digitando o valor da variável
    console.log("Foi digitado o valor de " + valor);
}

function alterarConteudoP() {
    const itemP = document.getElementById("conteudoP");
    //innerText define o 'valor' de dentro desse elemento
    itemP.innerText = "Você clicou em um botão";
}

function alterarBackground(){
    document.body.style.backgroundColor = "red";
}

function configurarEventos() {
    //getElement para pegar vincular o botão a variável botaoOla
    const botaoOla = document.getElementById("botao_ola");
    //addEventListener serve para atribuir uma condição e uma ação para caso a condição seja cumprida.
    botaoOla.addEventListener("click", dizerOla);

    const botaoValor = document.getElementById("botao_valor");
    botaoValor.addEventListener("click", valorDigitado);

    const botaoAlterar = document.getElementById("botao_alterar");
    botaoAlterar.addEventListener("click", alterarConteudoP);

    const botaoBackground = document.getElementById("botao_background");
    botaoBackground.addEventListener("click", alterarBackground);
}

//window seria a tela do navegador. Nisso estamos atribuindo que quando a tela estiver 100% carregada, será executado
//a função 'configurarEventos'
window.addEventListener("load", configurarEventos);