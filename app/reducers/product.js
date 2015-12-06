import { ADD_PRODUCT, CHECK_PRODUCT, UNCHECK_PRODUCT } from '../constants/ActionTypes'
import { addProduct, checkProduct, uncheckProduct } from '../actions/product'

export default function ProductReducer(state = [], action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProduct(state, action)

        case CHECK_PRODUCT:
            return checkProduct(state, action)

        case UNCHECK_PRODUCT:
            return uncheckProduct(state, action)

        default:
            return state
    }
}