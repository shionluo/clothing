import UserActionTypes from './user.types';

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const initialState = {
  currentUser: null,
  errorMessage: null
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        errorMessage: null
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        errorMessage: payload
      };
    default:
      return state;
  }
};

export default userReducer;
