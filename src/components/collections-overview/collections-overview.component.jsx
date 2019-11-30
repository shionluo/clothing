import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

//-- Components --//
import CollectionPreview from "../collection-preview/collection-preview.component";

//-- Selectors --//
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selectors";

//-- Style --//
import { CollectionsOverviewContainer } from "./collections-overview.styles";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
});

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default connect(mapStateToProps)(CollectionsOverview);
