import React from "react";

import { connect } from "react-redux";

//-- Actions --//
import {
  removeItem,
  subtractItem,
  addItem
} from "../../redux/cart/cart.action";

//-- Style --//
import "./checkout-item.scss";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  subtractItem: item => dispatch(subtractItem(item)),
  addItem: item => dispatch(addItem(item))
});

const CheckoutItem = ({ cartItem, removeItem, subtractItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => subtractItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
