import React from "react";

import { connect } from "react-redux";

//-- Components --//
import CustomButton from "../custom-button/custom-button";

//-- Actions --//
import { addItem } from "../../redux/cart/cart.action";

//-- Style --//
import "./collection-item.scss";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add To Cart
      </CustomButton>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CollectionItem);
