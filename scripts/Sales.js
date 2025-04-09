export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=side&_expand=vegetable&_expand=entree")
    const salesData = await sales.json()

    let salesDivs = salesData.map((sales) => {
        const totalPrice = sales.side.price + sales.vegetable.price + sales.entree.price
        return `<p>This is Order #${sales.id}: ${totalPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}</p>`
    })

    const salesToJoin = salesDivs.join("")

    return salesToJoin
}

