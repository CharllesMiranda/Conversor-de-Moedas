const converterBotao = document.querySelector(".botaoConverter")
const seletorDeMoedas1 = document.querySelector(".opcoesDeMoedas1")
const seletorDeMoedas2 = document.querySelector(".opcoesDeMoedas2")
const valorDigitado1 = document.querySelector(".valorParaConversao").value

let dolarDoDia = 5.89
let euroDoDia = 6.64
let libraDoDia = 7.79
let bitcoinDoDia = 84.553
let realDoDia = 1

// Essa parte é do "Converter de" 

function opcaoDeValores() {
    const valorDigitado1 = document.querySelector(".valorParaConversao").value
    const valorParaConverter1 = document.querySelector(".seraConvertido") //Valor em Real
    const valorJaConvertido1 = document.querySelector(".foiConvertido") //Valor de 0utras Moedas

    if(seletorDeMoedas1.value == "dolar") {  
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

    if(seletorDeMoedas1.value == "euro") {  
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

// ESSA PARTE É DO "CONVERTER PARA"

function converterValores() {
    const valorDigitado = document.querySelector(".valorParaConversao").value
    const valorParaConverter = document.querySelector(".seraConvertido") //Valor em Real
    const valorJaConvertido = document.querySelector(".foiConvertido") //Valor de 0utras Moedas
    
    // CONVERSAO DE REAL PARA...

    if(seletorDeMoedas1.value == "real" && seletorDeMoedas2.value == "dolar") {  
        dolarDoDia = 5.89
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
        }).format(valorDigitado / dolarDoDia)    
        console.log("Deu certo o Dolar")
    }

    if(seletorDeMoedas1.value == "real" && seletorDeMoedas2.value == "real") {  
        realDoDia = 1
        valorJaConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
        }).format(valorDigitado / realDoDia)
        console.log("Deu certo o Real")
    }

    if(seletorDeMoedas1.value == "real" && seletorDeMoedas2.value == "euro") {  
        euroDoDia = 6.64
        valorJaConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
        }).format(valorDigitado / euroDoDia)   
        console.log("Deu certo o Euro")
    }

    if(seletorDeMoedas1.value == "real" && seletorDeMoedas2.value == "libra") {  
        libraDoDia = 7.79
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
        }).format(valorDigitado / libraDoDia);
        console.log("Deu certo a Libra")
    }

    if(seletorDeMoedas1.value == "real" && seletorDeMoedas2.value == "Bitcoin") {  
        bitcoinDoDia = 84.553
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        minimumFractionDigits: 6 // mais casas decimais por ser valor pequeno
        }).format(valorDigitado / bitcoinDoDia);
        console.log("Deu certo a Bitcoin")
    }

    // CONVERSAO DE DOLAR PARA...

    if(seletorDeMoedas1.value == "dolar" && seletorDeMoedas2.value == "real") {  
        realDoDia = 5.89
        valorJaConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
        }).format(valorDigitado * realDoDia)
        console.log("Deu certo de Dolar para Real")
    }

    if(seletorDeMoedas1.value == "dolar" && seletorDeMoedas2.value == "dolar") {  
        dolarDoDia = 1
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
        }).format(valorDigitado / dolarDoDia)    
        console.log("Deu certo de Dòlar para Dólar")
    }

    if(seletorDeMoedas1.value == "dolar" && seletorDeMoedas2.value == "euro") {  
        euroDoDia = 0.887
        valorJaConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
        }).format(valorDigitado / euroDoDia)   
        console.log("Deu certo de Dólar para Euro")
    }

    if(seletorDeMoedas1.value == "dolar" && seletorDeMoedas2.value == "libra") {  
        libraDoDia = 0.756
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
        }).format(valorDigitado / libraDoDia);
        console.log("Deu certo de Dólar para Libra")
    }

    if(seletorDeMoedas1.value == "dolar" && seletorDeMoedas2.value == "Bitcoin") {  
        bitcoinDoDia = 0.0697
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        minimumFractionDigits: 6 // mais casas decimais por ser valor pequeno
        }).format(valorDigitado / bitcoinDoDia);
        console.log("Deu certo de Dólar para Bitcoin")
    }

    // CONVERSAO DE EURO PARA...

    if(seletorDeMoedas1.value == "euro" && seletorDeMoedas2.value == "real") {  
        realDoDia = 6.64
        valorJaConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
        }).format(valorDigitado * realDoDia)
        console.log("Deu certo de Euro para Real")
    }

    if(seletorDeMoedas1.value == "euro" && seletorDeMoedas2.value == "dolar") {  
        dolarDoDia = 1.127
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
        }).format(valorDigitado / dolarDoDia)    
        console.log("Deu certo de Euro para Dólar")
    }

    if(seletorDeMoedas1.value == "euro" && seletorDeMoedas2.value == "euro") {  
        euroDoDia = 1
        valorJaConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
        }).format(valorDigitado / euroDoDia)   
        console.log("Deu certo de Euro para Euro")
    }

    if(seletorDeMoedas1.value == "euro" && seletorDeMoedas2.value == "libra") {  
        libraDoDia = 0.852
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
        }).format(valorDigitado / libraDoDia);
        console.log("Deu certo de Euro para Libra")
    }

    if(seletorDeMoedas1.value == "euro" && seletorDeMoedas2.value == "Bitcoin") {  
        bitcoinDoDia = 0.0785
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        minimumFractionDigits: 6 // mais casas decimais por ser valor pequeno
        }).format(valorDigitado / bitcoinDoDia);
        console.log("Deu certo de Dólar para Bitcoin")
    }

    // CONVERSAO DE LIBRA PARA...

    if(seletorDeMoedas1.value == "libra" && seletorDeMoedas2.value == "real") {  
        realDoDia = 7.79
        valorJaConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
        }).format(valorDigitado * realDoDia)
        console.log("Deu certo de Libra para Real")
    }

    if(seletorDeMoedas1.value == "libra" && seletorDeMoedas2.value == "dolar") {  
        dolarDoDia = 1.322
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
        }).format(valorDigitado / dolarDoDia)    
        console.log("Deu certo de Libra para Dólar")
    }

    if(seletorDeMoedas1.value == "libra" && seletorDeMoedas2.value == "euro") {  
        euroDoDia = 1.173
        valorJaConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
        }).format(valorDigitado / euroDoDia)   
        console.log("Deu certo de Libra para Euro")
    }

    if(seletorDeMoedas1.value == "libra" && seletorDeMoedas2.value == "libra") {  
        libraDoDia = 1
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
        }).format(valorDigitado / libraDoDia);
        console.log("Deu certo de Libra para Libra")
    }

    if(seletorDeMoedas1.value == "libra" && seletorDeMoedas2.value == "Bitcoin") {  
        bitcoinDoDia = 0.0921
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        minimumFractionDigits: 6 // mais casas decimais por ser valor pequeno
        }).format(valorDigitado / bitcoinDoDia);
        console.log("Deu certo de Libra para Bitcoin")
    }

    // CONVERSAO DE BITCOIN PARA...

    if(seletorDeMoedas1.value == "Bitcoin" && seletorDeMoedas2.value == "real") {  
        realDoDia = 84.553
        valorJaConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
        }).format(valorDigitado * realDoDia)
        console.log("Deu certo de Bitcoin para Real")
    }

    if(seletorDeMoedas1.value == "Bitcoin" && seletorDeMoedas2.value == "dolar") {  
        dolarDoDia = 14.351
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
        }).format(valorDigitado / dolarDoDia)    
        console.log("Deu certo de Bitcoin para Dólar")
    }

    if(seletorDeMoedas1.value == "Bitcoin" && seletorDeMoedas2.value == "euro") {  
        euroDoDia = 12.733
        valorJaConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
        }).format(valorDigitado / euroDoDia)   
        console.log("Deu certo de Bitcoin para Euro")
    }

    if(seletorDeMoedas1.value == "Bitcoin" && seletorDeMoedas2.value == "libra") {  
        libraDoDia = 10.851
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
        }).format(valorDigitado / libraDoDia);
        console.log("Deu certo de Bitcoin para Libra")
    }

    if(seletorDeMoedas1.value == "Bitcoin" && seletorDeMoedas2.value == "Bitcoin") {  
        bitcoinDoDia = 1
        valorJaConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        minimumFractionDigits: 6 // mais casas decimais por ser valor pequeno
        }).format(valorDigitado / bitcoinDoDia);
        console.log("Deu certo de Bitcoin para Bitcoin")
    }
}

// ESSA PARTE É PARA MUDAR MOEDA DO LOGOTIPO DO LADO ESQUERDO, CONFORME O TIPO DE MOEDA SELECIONADA.

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

// ESSA PARTE É PARA MUDAR MOEDA DO LOGOTIPO DO LADO DIREITO, CONFORME O TIPO DE MOEDA SELECIONADA.

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

// ESSA PARTE É PARA MUDAR IMAGEM E DESCRIÇÃO DA PRIMEIRA MOEDA NA PARTE DE BAIXO ONDE DÁ O RESULTADO DA CONVERÇÃO.

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
    converterValores()
}

// ESSA PARTE É PARA MUDAR IMAGEM E DESCRIÇÃO DA SEGUNDA MOEDA NA PARTE DE BAIXO ONDE DÁ O RESULTADO DA CONVERÇÃO.

function mudarDeMoeda2() { // // Refere-se há segunda opção de moeda selecionada no "Converter para:"
    const nomeMoeda2 = document.querySelector(".nomeDaMoeda2")
    const imgBandeira2 = document.querySelector(".imgMoeda2")

    if(seletorDeMoedas2.value == "dolar") { 
        nomeMoeda2.innerHTML = "Dólar Americano"'
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
    
seletorDeMoedas2.addEventListener("change", mudarDeMoeda2, converterValores) // addEventListener("change") esta verificando toda vez que eu mudo de opção 
converterBotao.addEventListener("click", converterValores) //  addEventListener("click") esta verificando toda vez que eu clico no botão

seletorDeMoedas1.addEventListener("change", mudarDeMoeda1, converterValores)// addEventListener("change") esta verificando toda vez que eu mudo de opção 
converterBotao.addEventListener("click", opcaoDeValores) //  addEventListener("click") esta verificando toda vez que eu clico no botão

seletorDeMoedas1.addEventListener("change",  mudarLogoE)// addEventListener("change") esta verificando toda vez que eu mudo de opção 
seletorDeMoedas2.addEventListener("change",  mudarLogoD)// addEventListener("change") esta verificando toda vez que eu mudo de opção 
