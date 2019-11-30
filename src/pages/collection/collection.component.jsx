import React from "react";

import { connect } from "react-redux";

//-- Components --//
import CollectionItem from "../../components/collection-item/collection-item.component";

//-- Selectors --//
import { selectShopCollection } from "../../redux/shop/shop.selectors";

//-- Style --//
import {
  CollectionContainer,
  CollectionTitle,
  ItemsContainer
} from "./collection.styles";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

const Collection = ({ collection: { title, items } }) => {
  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <ItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionContainer>
  );
};

export default connect(mapStateToProps)(Collection);
