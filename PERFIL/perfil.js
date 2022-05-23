function configmodal() {
    let botao = document.getElementById("config-modal");
    if (botao.style.display == "grid") {
        botao.style = "display: none;";
    } else {
        botao.style = "display: grid;";
    }

}

function enviar(){
    var input = document.querySelector("#input-digitals");
    var texto = input.value;
    console.log(texto);

    var comentario = document.querySelector("#comentario");
    comentario.innerHTML = input.value;

    input.value = null;
}
