import React from "react";

//-- Components --//
import CollectionPreview from "../../components/collection-preview/collection-preview";

//-- Data --//
import SHOP_DATA from "./shop.data";

//-- Style --//
import "./shop.scss";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const Shop = () => {
  const collections = SHOP_DATA;

  return (
    <div className="shop">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;
