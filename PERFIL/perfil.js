function configmodal() {
    let botao = document.getElementById("config-modal");
    if (botao.style.display == "grid") {
        botao.style = "display: none;";
    } else {
        botao.style = "display: grid;";
    }

}