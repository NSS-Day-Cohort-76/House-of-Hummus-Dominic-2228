import { FoodTruck } from "./FoodTruck.js"
import { placeOrder } from "./transient.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {

    mainContainer.innerHTML = await FoodTruck()
}

renderAllHTML()
document.addEventListener("click", (event) => {
    if(event.target.id === "purchase"){
        placeOrder()
    }
})
document.addEventListener("newOrderPlaced", renderAllHTML)

