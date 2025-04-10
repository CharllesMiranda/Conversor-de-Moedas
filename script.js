const converterBotao = document.querySelector(".botaoConverter")

function converterValores() {
    const valorDigitado = document.querySelector(".valorParaConversao").value
    
    const dolarDoDia = 5.2
    const valorConvertido = valorDigitado / dolarDoDia
    
    console.log (valorConvertido)

}

converterBotao.addEventListener("click", converterValores) //  addEventListener esta verificando toda vez que eu clico no botão
