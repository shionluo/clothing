import React, { useEffect, lazy, Suspense } from 'react';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

//-- Components --//
import Spinner from '../../components/spinner/spinner.component';

//-- Actions --//
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

//-- Style --//
import { ShopContainer } from './shop.styles';

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

//Lazy
const CollectionContainer = lazy(() =>
  import('../collection/collection.container')
);
const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

const Shop = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <ShopContainer>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </Suspense>
    </ShopContainer>
  );
};

export default connect(null, mapDispatchToProps)(Shop);
