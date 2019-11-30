import React from "react";

import { connect } from "react-redux";

//-- Actions --//
import {
  removeItem,
  subtractItem,
  addItem
} from "../../redux/cart/cart.action";

//-- Style --//
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from "./checkout-item.styles";

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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => subtractItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>${price}</TextContainer>
      <RemoveButtonContainer onClick={() => removeItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
