import React from "react";

import { connect } from "react-redux";

//-- Selectors --//
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

//-- Actions --//
import { toggleCartHidden } from "../../redux/cart/cart.action";

//-- Shopping Icon --//
import { ReactComponent as ShoppingIcon } from "../../assets/shopping/shopping-bag.svg";

//-- Style --//
import "./cart-icon.scss";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const CartIcon = ({ itemCount, toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
