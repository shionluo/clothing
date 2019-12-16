import { compose } from 'redux';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

//-- Components --//
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

//-- Selectiors --//
import { selectShopCollectionsIsLoaded } from '../../redux/shop/shop.selectors';

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectShopCollectionsIsLoaded(state)
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
