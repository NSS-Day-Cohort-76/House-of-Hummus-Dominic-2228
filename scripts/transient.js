const transietState = {
  id: 0,
  vegetablesId: 0,
  sideDishId: 0,
  entreeId: 0
}

export const setVeggie = (event) => {
  const eventTarget = event.target.id
  transietState.vegetablesId = eventTarget
}

export const setSide = (event) => {
  const eventTarget = event.target.id
  transietState.sideDishId = eventTarget
}

export const setEntree = (event) => {
  const eventTarget = event.target.id
  transietState.entreeId = eventTarget
}


export const placeOrder = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(transietState)
  }
  const response = await fetch("http://localhost:8088/purchases", postOptions)
  const customEvent = new CustomEvent("newOrderPlaced")
  document.dispatchEvent(customEvent)
}