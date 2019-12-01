import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { withRouter } from "react-router-dom";

//-- Components --//
import CartItem from "../cart-item/cart-item.component";

//-- Actions --//
import { toggleCartHidden } from "../../redux/cart/cart.actions";

//-- Selectors --//
import { selectCartItems } from "../../redux/cart/cart.selectors";

//-- Style --//
import {
  CartDropDownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropDownButton
} from "./cart-dropdown.styles";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropDownButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropDownButton>
    </CartDropDownContainer>
  );
};

export default withRouter(connect(mapStateToProps)(CartDropdown));
