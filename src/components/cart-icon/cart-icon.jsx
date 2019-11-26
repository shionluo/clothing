import React from "react";

import { connect } from "react-redux";

//-- Actions --//
import { toggleCartHidden } from "../../redux/cart/cart.action";

//-- Shopping Icon --//
import { ReactComponent as ShoppingIcon } from "../../assets/shopping/shopping-bag.svg";

//-- Style --//
import "./cart-icon.scss";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CartIcon);
