function dizerOla(){
    console.log("botao clicado");
    alert("OLÁAAAAAAAAA!!!");
}

function valorDigitado(){
    const campoValor = document.getElementById("campo_valor");
    const valor = campoValor.value;
    console.log("Foi digitado o valor de " + valor);
}

function configurarEventos(){
    const botaoOla = document.getElementById("botao_ola");
    botaoOla.addEventListener("click", dizerOla);

}

window.addEventListener("load", configurarEventos);