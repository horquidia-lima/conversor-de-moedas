//Cotacao de moedas do dia
const USD = 4.99
const EUR = 5.99
const GBP = 6.99

const form = document.querySelector("form")
const currency = document.getElementById("currency")
const amount = document.getElementById("amount")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//Manipulando o input amount para receber somente numeros
amount.addEventListener("input", () => {
    const hasCaractersRegex = /\D+/g
    amount.value = amount.value.replace(hasCaractersRegex, "")
})


form.onsubmit = (e) => {
    e.preventDefault()
    //console.log(currency.value)

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break;
    }
}

//Funcao para converter moedas
function convertCurrency(amount, price, symbol) {
   try {
    //Exibindo a cotacao da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    //Calculando o total
    let total = amount * price

    //Formatando o total
    total = formatCurrencyBRL(total).replace("R$", "")

    //Exibe o resultado final
    result.textContent = `${total} Reais`

    footer.classList.add("show-result")
   } catch (error) {
    footer.classList.remove("show-result")
    alert("Ocorreu um erro ao converter a moeda")
   }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}