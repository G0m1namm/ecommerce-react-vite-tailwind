export const getTotalPrice = (products) => {
    if (!products) return
    return products.reduce((prev, curr) => {
        return prev + (curr.price * curr.quantity)
    }, 0)
}