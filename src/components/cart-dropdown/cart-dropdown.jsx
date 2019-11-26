import React from "react";

//-- Components --//
import CustomButton from "../custom-button/custom-button";

//-- Style --//
import "./cart-dropdown.scss";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
