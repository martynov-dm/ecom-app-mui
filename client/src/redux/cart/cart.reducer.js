import AuthActionTypes from '../auth/auth.types'
import { CartActionTypes } from './cart.types'
import { addItemToCart, removeItemFromCart } from './cart.utils'

const INITIAL_STATE = {
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      }
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      }
    case AuthActionTypes.SIGN_OUT_SUCCESS:
      return INITIAL_STATE
    case CartActionTypes.REMOVE_ITEM:
      const newSt = {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      }
      return newSt
    default:
      return state
  }
}

export default cartReducer
