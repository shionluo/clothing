import CartActionTypes from './cart.types';

import { addItemToCart, subtractItemFromCart } from './cart.utils';

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload)
      };
    case CartActionTypes.SUBTRACT_ITEM:
      return {
        ...state,
        cartItems: subtractItemFromCart(state.cartItems, payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== payload.id
        )
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};

export default cartReducer;
