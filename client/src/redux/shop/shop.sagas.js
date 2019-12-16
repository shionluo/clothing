import { takeLatest, put, all, call } from 'redux-saga/effects';

//-- Actions --//
import ShopActionTypes from './shop.types';

//-- Firebase --//
import { firestore, convertCollectionsSnapshot } from '../../firebase/firebase';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

export function* fetchCollectionsStartAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collections = yield call(convertCollectionsSnapshot, snapshot);
    yield put(fetchCollectionsSuccess(collections));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsStartAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
