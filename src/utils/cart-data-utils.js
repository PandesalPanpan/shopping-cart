export const getSubtotal = (cartItems) => {
    return cartItems.reduce((prev, curr) => {
        return prev + (curr.price * curr.count);
    }, 0).toFixed(2);
}

export const getTotalItemsCount = (cartItems) => {
    return cartItems.reduce((prev, curr) => {
        return prev + curr.count;
    }, 0);
}