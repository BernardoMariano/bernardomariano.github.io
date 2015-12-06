import React from 'react'
import Product from './product'
import ProductCart from './product-cart'

class Cart extends React.Component {
    render() {
        const { store } = this.context
        const products = store.getState()
        let total = 0

        return (
            <div className="cart-products">
                <ul>
                    { products.map((product) => {
                        if (product.selected > 0) {
                            let subtotal = parseFloat(product.price * product.selected)
                            total = parseFloat(total + subtotal)
                            return <ProductCart product={ product } subtotal={ subtotal } key={ product.id } />
                        }
                    }) }
                </ul>
                <strong>Total US$ { total.toFixed(2) }</strong>
            </div>
        )
    }
}

Cart.contextTypes = {
    store: React.PropTypes.object
}

export default Cart