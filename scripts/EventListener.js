import { setEntree, setSide, setVeggie } from "./transient.js"

export const handleEntreeChoice = (entree) => {
  if(entree.target.name === "entree"){
    setEntree(parseInt(entree.target.id))
  }
}

export const handleSideChoice = (side) => {
  if(side.target.name === "sideDish"){
    setSide(parseInt(side.target.id))
  }
}

export const handleVeggieChoice = (veggie) => {
  if(veggie.target.name === "veggie"){
    setVeggie(parseInt(veggie.target.id))
  }
}