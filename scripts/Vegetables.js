import { setVeggie } from "./transient.js"

export const Veggies = async () => {
const response = await fetch("http://localhost:8088/vegetables")
const responseData = await response.json()

    const veggiesRadioButton = responseData.map((obj) => {
        return `<input type="radio" name="veggies" id="${obj.id}">${obj.type}`
    })

    const veggiesToJoin = veggiesRadioButton.join('')
    return veggiesToJoin
}

document.addEventListener("change", setVeggie)
