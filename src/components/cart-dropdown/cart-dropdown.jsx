import React from "react";

import { connect } from "react-redux";

//-- Components --//
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";

//-- Style --//
import "./cart-dropdown.scss";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default connect(mapStateToProps)(CartDropdown);
