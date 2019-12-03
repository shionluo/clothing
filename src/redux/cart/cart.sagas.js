import { takeLatest, put, all, call } from "redux-saga/effects";

//-- Types --//
import UserActionTypes from "../user/user.types";

//-- Actions --//
import { clearCart } from "./cart.actions";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
