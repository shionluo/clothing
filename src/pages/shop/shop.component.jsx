import React from "react";

import { Route } from "react-router-dom";

//-- Pages --//
import Collection from "../collection/collection.component";

//-- Components --//
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

//-- Style --//
import "./shop.styles";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const Shop = ({ match }) => {
  return (
    <div className="shop">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
