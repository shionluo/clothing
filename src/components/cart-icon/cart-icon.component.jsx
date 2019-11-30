import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

//-- Selectors --//
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

//-- Actions --//
import { toggleCartHidden } from "../../redux/cart/cart.action";

//-- Style --//
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCounContainer
} from "./cart-icon.styles";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const CartIcon = ({ itemCount, toggleCartHidden }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCounContainer>{itemCount}</ItemCounContainer>
    </CartIconContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
