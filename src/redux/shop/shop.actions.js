import ShopActionTypes from "./shop.types";

// import { firestore, convertCollectionsSnapshot } from "../../firebase/firebase";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collections => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

// export const fetchCollectionsStartAsync = () => dispatch => {
//   const collectionRef = firestore.collection("collections");
//   dispatch(fetchCollectionsStart());

//   collectionRef
//     .get()
//     .then(snapshot => {
//       const collections = convertCollectionsSnapshot(snapshot);
//       dispatch(fetchCollectionsSuccess(collections));
//     })
//     .catch(error => dispatch(fetchCollectionsFailure(error.message)));
// };
