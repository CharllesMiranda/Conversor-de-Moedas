const converterBotao = document.querySelector(".botaoConverter")
const seletorDeMoedas1 = document.querySelector(".opcoesDeMoedas1")
const seletorDeMoedas2 = document.querySelector(".opcoesDeMoedas2")
const valorDigitado1 = document.querySelector(".valorParaConversao").value

// Essa parte é do "Converter de" 

function opcaoDeValores() {
    const valorDigitado1 = document.querySelector(".valorParaConversao").value
    const valorParaConverter1 = document.querySelector(".seraConvertido") //Valor em Real
    const valorJaConvertido1 = document.querySelector(".foiConvertido") //Valor de 0utras Moedas


    const dolarDoDia = 5.2
    const euroDoDia = 6.2
    const libraDoDia = 7.74
    const bitcoinDoDia = 84.553
    const real = 1

    if(seletorDeMoedas1.value == "dolar") {  // Se o valor for dolar, então execute essa função
        valorParaConverter1.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
        }).format(valorDigitado1)        
    }

    if(seletorDeMoedas1.value == "real") {
        valorParaConverter1.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
        }).format(valorDigitado1)
    }

    if(seletorDeMoedas1.value == "euro") {  // Se o valor for dolar, então execute essa função
        valorParaConverter1.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
        }).format(valorDigitado1)
    }

    if (seletorDeMoedas1.value == "libra") {
        valorParaConverter1.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
        }).format(valorDigitado1);
    }
      
      if (seletorDeMoedas1.value == "Bitcoin") {
        valorParaConverter1.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        minimumFractionDigits: 6 // mais casas decimais por ser valor pequeno
        }).format(valorDigitado1);
    }   
}

// Essa parte é do "Converter para" 

function converterValores() {
    const valorDigitado = document.querySelector(".valorParaConversao").value
    const valorParaConverter = document.querySelector(".seraConvertido") //Valor em Real
    const valorJaConvertido = document.querySelector(".foiConvertido") //Valor de 0utras Moedas

    const dolarDoDia = 5.89
    const euroDoDia = 6.64
    const libraDoDia = 7.79
    const bitcoinDoDia = 84.553
    const real = 1
    
    if(seletorDeMoedas2.value == "dolar") {  // Se o valor for dolar, então execute essa função
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
        }).format(valorDigitado / dolarDoDia)    
    }

    if(seletorDeMoedas2.value == "real") {
        valorJaConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
        }).format(valorDigitado / real)
    }

    if(seletorDeMoedas2.value == "euro") {  // Se o valor for euro, então execute essa função
        valorJaConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
        }).format(valorDigitado / euroDoDia)
    }

    if (seletorDeMoedas2.value == "libra") {
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
        }).format(valorDigitado / libraDoDia);
    }
      
    if (seletorDeMoedas2.value == "Bitcoin") {
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        inimumFractionDigits: 6 // mais casas decimais por ser valor pequeno
        }).format(valorDigitado / bitcoinDoDia);
    }   
}

// Essa parte é para mudar Moeda do logotipo  do lado esqeurdo, conforme o tipo de moeda selecionada.

function mudarLogoE(){
    const moedaEsquerda = document.querySelector(".moedaE")

    if(seletorDeMoedas1.value == "real") {
        moedaEsquerda.src = "./assets/moedaReal.png.png"
    }

    if(seletorDeMoedas1.value == "dolar") {
        moedaEsquerda.src = "./assets/moedaDolar.png.png"
    }

    if(seletorDeMoedas1.value == "euro") {
        moedaEsquerda.src = "./assets/moedaEuro.png.png"
    }

    if(seletorDeMoedas1.value == "libra") {
        moedaEsquerda.src = "./assets/moedaLibra.png.png"
    }

    if(seletorDeMoedas1.value == "Bitcoin") {
        moedaEsquerda.src = "./assets/moedaBitcoin.png.png"
    }
}

// Essa parte é para mudar Moeda do logotipo  do lado direito, conforme o tipo de moeda selecionada.

function mudarLogoD(){
   const moedaDireita = document.querySelector(".moedaD")

    if(seletorDeMoedas2.value == "real") {
        moedaDireita.src = "./assets/moedaReal.png.png"
    }
    
    if(seletorDeMoedas2.value == "dolar") {
        moedaDireita.src = "./assets/moedaDolar.png.png"
    }

    if(seletorDeMoedas2.value == "euro") {
        moedaDireita.src = "./assets/moedaEuro.png.png"
    }

    if(seletorDeMoedas2.value == "libra") {
        moedaDireita.src = "./assets/moedaLibra.png.png"
    }

    if(seletorDeMoedas2.value == "Bitcoin") {
        moedaDireita.src = "./assets/moedaBitcoin.png.png"
    }
}

// Essa parte é para mudar imagem e descrição da primeira moeda na parte de baixo onde dá o resultado da converção.

function mudarDeMoeda1() { // Refere-se há primeira opção de moeda selecionada no "Converter de:"
    const nomeMoeda1 = document.querySelector(".nomeDaMoeda1")
    const imgBandeira1 = document.querySelector(".imgMoeda1")
   

    if(seletorDeMoedas1.value == "dolar") { 
        nomeMoeda1.innerHTML = "Dólar Americano"
        imgBandeira1.src = "./assets/dolar.png"   
    }

    if(seletorDeMoedas1.value == "real") { 
        nomeMoeda1.innerHTML = "Real"
        imgBandeira1.src = "./assets/real.png"    
    }

    if(seletorDeMoedas1.value == "euro") { 
        nomeMoeda1.innerHTML = "Euro"
        imgBandeira1.src = "./assets/euro.png"    
    }

    if(seletorDeMoedas1.value == "libra") { 
        nomeMoeda1.innerHTML = "Libra"
        imgBandeira1.src = "./assets/libra.png"    
    }

    if(seletorDeMoedas1.value == "Bitcoin") { 
        nomeMoeda1.innerHTML = "Bitcoin"
        imgBandeira1.src = "./assets/bitcoin.png"    
    }

    opcaoDeValores()
}

// Essa parte é para mudar imagem e descrição da segunda moeda na parte de baixo onde dá o resultado da converção.

function mudarDeMoeda2() { // // Refere-se há primeira opção de moeda selecionada no "Converter para:"
    const nomeMoeda2 = document.querySelector(".nomeDaMoeda2")
    const imgBandeira2 = document.querySelector(".imgMoeda2")

    if(seletorDeMoedas2.value == "dolar") { 
        nomeMoeda2.innerHTML = "Dólar Americano"
        imgBandeira2.src = "./assets/dolar.png"
    }

    if(seletorDeMoedas2.value == "real") { 
        nomeMoeda2.innerHTML = "Real"
        imgBandeira2.src = "./assets/real.png"    
    }

    if(seletorDeMoedas2.value == "euro") { 
        nomeMoeda2.innerHTML = "Euro"
        imgBandeira2.src = "./assets/euro.png"    
    }

    if(seletorDeMoedas2.value == "libra") { 
        nomeMoeda2.innerHTML = "Libra"
        imgBandeira2.src = "./assets/libra.png"    
    }

    if(seletorDeMoedas2.value == "Bitcoin") { 
        nomeMoeda2.innerHTML = "Bitcoin"
        imgBandeira2.src = "./assets/bitcoin.png"    
    }

    converterValores()
}

seletorDeMoedas2.addEventListener("change", mudarDeMoeda2) // addEventListener("change") esta verificando toda vez que eu mudo de opção 
converterBotao.addEventListener("click", converterValores) //  addEventListener("click") esta verificando toda vez que eu clico no botão

seletorDeMoedas1.addEventListener("change", mudarDeMoeda1 )// addEventListener("change") esta verificando toda vez que eu mudo de opção 
converterBotao.addEventListener("click", opcaoDeValores) //  addEventListener("click") esta verificando toda vez que eu clico no botão

seletorDeMoedas1.addEventListener("change",  mudarLogoE)// addEventListener("change") esta verificando toda vez que eu mudo de opção 
seletorDeMoedas2.addEventListener("change",  mudarLogoD)// addEventListener("change") esta verificando toda vez que eu mudo de opção 
