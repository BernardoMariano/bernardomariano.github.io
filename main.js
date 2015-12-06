import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'

import Shop from './app/containers/shop'
import ProductReducer from './app/reducers/product'


// const store = createStore(ProductReducer)
const createStoreWithMiddleware = compose(applyMiddleware(createLogger())(createStore));
const store = createStoreWithMiddleware(ProductReducer);

const render = () => {
    ReactDOM.render(
        <Provider store={ store }>
            <Shop />
        </Provider>,
        document.getElementById('root')
    )
}

store.subscribe(render)
render()