import React from "react";

import { Route } from "react-router-dom";

//-- Pages --//
import Collection from "../collection/collection";

//-- Components --//
import CollectionsOverview from "../../components/collections-overview/collections-overview";

//-- Style --//
import "./shop.scss";

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
