let sliderElement = document.querySelector("#slider");
let botaoElement = document.querySelector("#botao-gerar");

let tamanhoPassword = document.querySelector("#valor");
let senha = document.querySelector("#senha");

let container = document.querySelector("#container-senha");


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";

tamanhoPassword.innerHTML = sliderElement.value;
let senhas = "";
    slider.oninput = function(){
        tamanhoPassword.innerHTML = this.value;
    }

    function gerarSenha(){

         
           
        for ( let i = 0, n = charset.length; i < sliderElement.value; i++){
            senhas += charset.charAt(Math.floor(Math.random() * n));

        }
        container.classList.remove("hide");
        senha.innerHTML = senhas;
    }   

    function copiar(){
        
        navigator.clipboard.writeText(senhas);

    }
   