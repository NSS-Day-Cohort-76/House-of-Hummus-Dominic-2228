export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases")
    const salesData = await sales.json()

    let salesDivs = salesData.map((sales) => {
        return `<p>This is Order #${sales.id}</p>`
    })

    salesDivs = salesDivs.join("")

    return salesDivs
}

