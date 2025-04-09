import { Entrees } from "./Entrees.js"
import { Sales } from "./Sales.js"
import { Sides } from "./SideDishes.js"
import { Veggies } from "./Vegetables.js"

export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const veggieHTML = await Veggies()
    const sidesHTML = await Sides()
    const entreeHTML = await Entrees()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
    <div id="meal-tray">
        <div class="choose-meal">
        ${entreeHTML}
        </div>

        <div class="choose-meal">
        ${veggieHTML}
        </div>

        <div class="choose-meal">
        ${sidesHTML}
        </div>
    </div>
        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
