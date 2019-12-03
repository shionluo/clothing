import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

//-- Components --//
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

//-- Selectors --//
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectUserCurrent } from "../../redux/user/user.selectors";

//-- Actions --//
import { signOutStart } from "../../redux/user/user.actions";

//-- Logo --//
import { ReactComponent as Logo } from "../../assets/logo/clothing.svg";

//-- Style --/
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapStateToProps = createStructuredSelector({
  currentUser: selectUserCurrent,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" to="/" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
