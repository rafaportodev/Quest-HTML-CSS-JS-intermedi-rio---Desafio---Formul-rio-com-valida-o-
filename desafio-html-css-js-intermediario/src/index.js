const botaoEnviar = document.getElementById("botao-enviar");
const inputs = document.querySelectorAll(".input");
const mensagensCampoObrigatorio = document.getElementsByClassName("mensagem-campo-obrigatorio");

function validarPreenchimento(input, array, index) {
    if(input.value == "") {
        input.style.border = "1px solid #ff0000";
        array[index].style.display = "inline";
    } else {
        input.style.border = "1px solid #008000";
        array[index].style.display = "none";
    }
}

botaoEnviar.addEventListener("click",
    () => {
        for (let index = 0; index < inputs.length; index++) {
            validarPreenchimento(inputs[index], mensagensCampoObrigatorio, index);
        }
    }
)