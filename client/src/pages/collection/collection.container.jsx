import { compose } from 'redux';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

//-- Components --//
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import Collection from './collection.component';

//-- Selectiors --//
import { selectShopCollectionsIsLoaded } from '../../redux/shop/shop.selectors';

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectShopCollectionsIsLoaded(state)
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
