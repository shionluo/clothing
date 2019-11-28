import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

//-- Components --//
import CollectionPreview from "../collection-preview/collection-preview";

//-- Selectors --//
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selectors";

//-- Style --//
import "./collections-overview.scss";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
});

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(CollectionsOverview);
