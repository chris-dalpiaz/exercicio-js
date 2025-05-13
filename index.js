function dizerOla(){
    console.log("botao clicado");
    alert("OLÁAAAAAAAAA!!!");
}

function configurarEventos(){
    const botaoOla = document.getElementById("botao_ola");
    botaoOla.addEventListener("click", dizerOla);

}

window.addEventListener("load", configurarEventos);