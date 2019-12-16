import React, { useEffect } from 'react';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

//-- Pages --//
import CollectionContainer from '../collection/collection.container';

//-- Components --//
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

//-- Actions --//
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

//-- Style --//
import './shop.styles';

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

const Shop = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Shop);
