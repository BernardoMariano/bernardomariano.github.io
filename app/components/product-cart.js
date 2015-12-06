import React from 'react'
import { CHECK_PRODUCT, UNCHECK_PRODUCT } from '../constants/ActionTypes'

class ProductCart extends React.Component {
    render() {
        const { product, subtotal } = this.props
        const { store } = this.context

        return (
            <li>
                <h3>{ product.name }</h3>
                Ordering × { product.selected }
                {' '}
                <button
                    disabled={ product.selected >= product.quantity }
                    onClick={ () => {
                        store.dispatch({
                            type: CHECK_PRODUCT,
                            id: product.id
                        })
                    } }
                >+</button>
                <button
                    disabled={ product.selected <= 0 }
                    onClick={ () => {
                        store.dispatch({
                            type: UNCHECK_PRODUCT,
                            id: product.id
                        })
                    } }
                >-</button>
                <br />
                Sub Total: US$ { subtotal.toFixed(2) }
            </li>
        )
    }
}

ProductCart.contextTypes = {
    store: React.PropTypes.object
}

export default ProductCart