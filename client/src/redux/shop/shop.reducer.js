import ShopActionTypes from './shop.types';

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const initialState = {
  isFetching: false,
  collections: null,
  errorMessage: null
};

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: payload,
        errorMessage: null
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload
      };
    default:
      return state;
  }
};

export default shopReducer;
