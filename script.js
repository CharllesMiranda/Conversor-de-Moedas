const converterBotao = document.querySelector(".botaoConverter")
const seletorDeMoedas = document.querySelector(".opcoesDeMoedas")

function converterValores() {
    const valorDigitado = document.querySelector(".valorParaConversao").value
    const valorParaConverter = document.querySelector(".seraConvertido") //Valor em Real
    const valorJaConvertido = document.querySelector(".foiConvertido") //Valor de 0utras Moedas
    
    console.log(seletorDeMoedas.value)

    const dolarDoDia = 5.2
    const euroDoDia = 6.2

    if(seletorDeMoedas.value == "dolar") {  // Se o valor for dolar, então execute essa função
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
        }).format(valorDigitado / dolarDoDia)
    }

    if(seletorDeMoedas.value == "euro") {  // Se o valor for euro, então execute essa função
        valorJaConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
        }).format(valorDigitado / euroDoDia)
    }

    valorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorDigitado)

}

function mudarDeMoeda() {
    const nomeMoeda = document.querySelector(".nomeDaMoeda")
    const imgBandeira = document.querySelector(".imgMoeda")

    if(seletorDeMoedas.value == "dolar") { 
        nomeMoeda.innerHTML = "Dólar Americano"
        imgBandeira.src = "./assets/dolar.png"
    }

    if(seletorDeMoedas.value == "euro") { 
        nomeMoeda.innerHTML = "Euro"
        imgBandeira.src = "./assets/euro.png"
        
    }

    converterValores()
}

seletorDeMoedas.addEventListener("change", mudarDeMoeda)
converterBotao.addEventListener("click", converterValores) //  addEventListener esta verificando toda vez que eu clico no botão


