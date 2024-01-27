let sliderElement = document.querySelector("#slider");
let botaoElement = document.querySelector("#botao-gerar");

let tamanhoPassword = document.querySelector("#valor");
let senha = document.querySelector("#senha");

let container = document.querySelector("#container-senha");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

tamanhoPassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
    tamanhoPassword.innerHTML = this.value;
}

function gerarSenha() {
    let novaSenha = "";  // Reinicia a variável a cada vez que a função é chamada

    for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
        novaSenha += charset.charAt(Math.floor(Math.random() * n));
    }

    container.classList.remove("hide");
    senha.innerHTML = novaSenha;
}

function copiar() {
    navigator.clipboard.writeText(senha.innerHTML);
}
