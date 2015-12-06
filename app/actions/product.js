let nextProductId = 0;
export function addProduct(state, action) {
    return [
        ...state,
        {
            id: nextProductId++,
            name: action.name,
            price: parseFloat(action.price).toFixed(2),
            quantity: action.quantity,
            selected: 0
        }
    ]
}

export function checkProduct(state, action) {
    return state.map((product) => {
        if (product.id !== action.id) {
            return product
        } else {
            if (product.selected < product.quantity) {
                return {
                    ...product,
                    selected: ++product.selected
                }
            } else {
                return product
            }
        }
    })
}

export function uncheckProduct(state, action) {
    return state.map((product) => {
        if (product.id !== action.id) {
            return product
        } else {
            if (product.selected > 0) {
                return {
                    ...product,
                    selected: --product.selected
                }
            } else {
                return product
            }
        }
    })
}