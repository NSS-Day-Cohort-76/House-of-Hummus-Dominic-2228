const transientState = {
  id: 0,
  vegetableId: 0,
  sideId: 0,
  entreeId: 0
}

export const setVeggie = (veggie) => {
  transientState.vegetableId = veggie
}

export const setSide = (side) => {
  transientState.sideId = side
}

export const setEntree = (entree) => {
  transientState.entreeId = entree
}


export const placeOrder = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(transientState)
  }
  const response = await fetch("http://localhost:8088/purchases", postOptions)
  const customEvent = new CustomEvent("newOrderPlaced")
  document.dispatchEvent(customEvent)
}