const costIn = document.querySelector("#cost")
const sellingPrice = document.querySelector("#sell")
const quantity = document.querySelector("#qnt")
const button = document.querySelector("#btn")
const message = document.querySelector("#msg")

button.addEventListener("click", input)

function input() {
    let cost = Number(costIn.value);
    let sell = Number(sellingPrice.value);
    let quantities = Number(quantity.value);
    profitLoss(cost, sell, quantities)

}

function profitLoss(cost, sell, quantities) {
    if (cost == 0 || sell == 0 || quantities == 0) {
        showMessage(`Please enter the required fields.`)
    } else if (cost > sell) {//if purchase price is greater than selling price that its a loss and loss formula is calulated
        let loss = (cost - sell) * quantities;
        let lossPrec = Math.round((loss / cost) * 100)

        showMessage(`Ohh!! Its a loss of ${loss} and the percentage of loss is ${lossPrec}% 😢`)
        message.style.background="red"
    } else if (sell > cost) {//if selling price is greater than purchase price so its a profit
        let profit = (sell - cost) * quantities;

        let profitPerc = Math.round((profit / cost) * 100)

        showMessage(`Ok!! so its a profit of ${profit} and the percentage of profit is ${profitPerc}% 😀`)
        message.style.background="green"
        
    } else {
        showMessage(`No loss no profit`)
        message.style.color="white"
    }
}

function showMessage(msg) {
    message.innerText = msg
    
}