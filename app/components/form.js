import React from 'react'
import { ADD_PRODUCT } from '../constants/ActionTypes'

class Form extends React.Component {
    render() {
        return (
            <div className="form-group">
                Name: <input type="text" defaultValue="Apple iPhone 6 32GB White" ref="name" className="form-control" />
                <br />
                Price: <input type="text" defaultValue="749.00" ref="price" className="form-control" />
                <br />
                Quantity: <input type="number" defaultValue="10" ref="quantity" className="form-control" />
                <br />
                <button className="btn" onClick={() => {
                    const { store } = this.context
                    const { name, price, quantity } = this.refs
                    store.dispatch({
                        type: ADD_PRODUCT,
                        name: name.value,
                        price: price.value,
                        quantity: quantity.value
                    })
                    name.value = ''
                    price.value = ''
                    quantity.value = ''
                }}>Save</button>
            </div>
        )
    }
}

Form.contextTypes = {
    store: React.PropTypes.object
}

export default Form