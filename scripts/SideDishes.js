import { handleSideChoice } from "./EventListener.js"

export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const responseData = await response.json()


    const sidesRadioButton = responseData.map((obj) => {
        return `<input type="radio" name="sideDish" id="${obj.id}"> ${obj.title}`
    })
    const sidesToJoin = sidesRadioButton.join('')
    return sidesToJoin
}

document.addEventListener("change", handleSideChoice)

