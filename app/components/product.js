import React from 'react'
import { CHECK_PRODUCT } from '../constants/ActionTypes'

class Product extends React.Component {
    render() {
        const { store } = this.context
        const { product } = this.props
        return (
            <li>
                <h3>{ product.name }</h3>
                <span>Price: US$ { product.price }</span>
                {' - '}
                <em>{ product.selected < product.quantity ? 'In Stock' : 'Sold Out' }</em>
                <br />
                <button className="btn btn-primary" onClick={ () => {
                    store.dispatch({
                        type: CHECK_PRODUCT,
                        id: product.id
                    })
                } }>Buy</button>
            </li>
        )
    }
}

Product.contextTypes = {
    store: React.PropTypes.object
}

export default Product