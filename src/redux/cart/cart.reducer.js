import cartActionTypes from "./cart.type";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const initialState = {
  hidden: true
};

const cartReducer = (state = initialState, { type }) => {
  switch (type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;
