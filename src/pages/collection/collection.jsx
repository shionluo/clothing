import React from "react";

import { connect } from "react-redux";

//-- Components --//
import CollectionItem from "../../components/collection-item/collection-item";

//-- Selectors --//
import { selectShopCollection } from "../../redux/shop/shop.selectors";

//-- Style --//
import "./collection.scss";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Collection);
