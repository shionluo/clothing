import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

//-- Components --//
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

//-- Selectors --//
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectUserCurrent } from "../../redux/user/user.selectors";

//-- Logo --//
import { ReactComponent as Logo } from "../../assets/logo/clothing.svg";

//-- Firebase --//
import { auth } from "../../firebase/firebase";

//-- Style --/
import "./header.scss";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapStateToProps = createStructuredSelector({
  currentUser: selectUserCurrent,
  hidden: selectCartHidden
});

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default connect(mapStateToProps)(Header);
