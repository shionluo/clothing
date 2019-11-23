import React from "react";

//-- Data --//
import SHOP_DATA from "./shop.data";

//-- Components --//
import CollectionPreview from "../../components/Collection-Preview/collection-preview";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const Shop = () => {
  const collections = SHOP_DATA;

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;
