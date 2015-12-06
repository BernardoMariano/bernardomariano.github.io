import React from 'react'
import ProductsList from '../components/products-list'
import Form from '../components/form'
import Cart from '../components/cart'

class Shop extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Work & Co - Shopping</h1>
                </div>
                <div className="col-sm-3">
                    <h2>New Product</h2>
                    <Form />
                </div>
                <div className="col-sm-6">
                    <h2>Available Produts</h2>
                    <ProductsList />
                </div>
                <div className="col-sm-3">
                    <h2>Your Cart</h2>
                    <Cart />
                </div>
            </div>
        )
    }
}

export default Shop