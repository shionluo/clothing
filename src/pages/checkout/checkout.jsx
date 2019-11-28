import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

//-- Components --//
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeButton from "../../components/stripe-button/stripe-button";

//-- Selectors --//
import {
  selectCartItems,
  selectCartItemsTotalPrice
} from "../../redux/cart/cart.selectors";

//-- Style --//
import "./checkout.scss";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotalPrice
});

const CheckOut = ({ cartItems, totalPrice }) => {
  return (
    <div className="checkout">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>
      <div className="test-warning">
        * Please use the following test credit card for payments *
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeButton price={totalPrice} />
    </div>
  );
};

export default connect(mapStateToProps)(CheckOut);
