const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    console.log(currencySelect.value)
    const currencyValueToConvert = document.querySelector(".currency-value-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

    const dolarToday = 5.3
    const euroToday = 6.04
    const libraToday = 7.02

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyCoverted = document.getElementById("currency-coverted")
    const currencyImage = document.getElementById("currency-image")

    if(currencySelect.value == "dolar") {
        currencyCoverted.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }
    if(currencySelect.value == "euro") {
        currencyCoverted.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }
    if(currencySelect.value == "libra") {
        currencyCoverted.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"
    }

    convertValues() 

  
}


currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)
