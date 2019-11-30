import React from "react";

import { connect } from "react-redux";

//-- Actions --//
import { addItem } from "../../redux/cart/cart.action";

//-- Style --//
import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  AddButton
} from "./collection-item.styles";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <span>{name}</span>
        <span>${price}</span>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add To Cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default connect(null, mapDispatchToProps)(CollectionItem);
