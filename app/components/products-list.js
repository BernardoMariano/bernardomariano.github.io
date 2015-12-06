import React from 'react'
import Product from './product'

class ProductsList extends React.Component {
    render() {
        const { store } = this.context
        const products = store.getState()
        if (!products.length) {
            return (
                <span>Sorry, no available products yet.</span>
            )
        } else {
            return (
                <div className="shop-products">
                    <ul>
                        { products.map((product) =>
                            <Product product={ product } key={ product.id } />
                        ) }
                    </ul>
                </div>
            )
        }
    }
}

ProductsList.contextTypes = {
    store: React.PropTypes.object
}

export default ProductsList