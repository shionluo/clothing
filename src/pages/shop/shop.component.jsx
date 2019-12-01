import React, { useState, useEffect } from "react";

import { Route } from "react-router-dom";

import { connect } from "react-redux";

//-- Pages --//
import Collection from "../collection/collection.component";

//-- Components --//
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

//-- Actions --//
import { updateCollections } from "../../redux/shop/shop.actions";

//-- Firebase --/
import { firestore, convertCollectionsSnapshot } from "../../firebase/firebase";

//-- Style --//
import "./shop.styles";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections))
});

const Shop = ({ match, updateCollections }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(snapshot => {
      const collections = convertCollectionsSnapshot(snapshot);
      updateCollections(collections);
      setIsLoading(false);
    });
  }, [updateCollections]);

  return (
    <div className="shop">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Shop);
