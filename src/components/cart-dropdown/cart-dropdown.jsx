import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { withRouter } from "react-router-dom";

//-- Components --//
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";

//-- Actions --//
import { toggleCartHidden } from "../../redux/cart/cart.action";

//-- Selectors --//
import { selectCartItems } from "../../redux/cart/cart.selectors";

//-- Style --//
import "./cart-dropdown.scss";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(connect(mapStateToProps)(CartDropdown));
