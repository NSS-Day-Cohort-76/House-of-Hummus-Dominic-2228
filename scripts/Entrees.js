import { setEntree } from "./transient.js"

export const Entrees = async () => {
  const response = await fetch('http://localhost:8088/entrees')
  const responseData = await response.json()


  const entreesRadioButton = responseData.map((obj) => {
    return `<input type="radio" name="entree" id="${obj.id}"> ${obj.name}`
  })

  const entreeToJoin = entreesRadioButton.join('')
  return entreeToJoin
}

document.addEventListener("change", setEntree)