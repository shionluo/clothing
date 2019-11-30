import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

//-- Components --//
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

//-- Selectors --//
import {
  selectCartItems,
  selectCartItemsTotalPrice
} from "../../redux/cart/cart.selectors";

//-- Style --//
import {
  CheckOutContainer,
  CheckOutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  TestWarningContainer
} from "./checkout.styles";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotalPrice
});

const CheckOut = ({ cartItems, totalPrice }) => {
  const columns = ["Product", "Description", "Quantiy", "Price", "Remove"];
  return (
    <CheckOutContainer>
      <CheckOutHeaderContainer>
        {columns.map(column => (
          <HeaderBlockContainer>
            <span>{column}</span>
          </HeaderBlockContainer>
        ))}
      </CheckOutHeaderContainer>

      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <TotalContainer>
        <span>TOTAL: ${totalPrice}</span>
      </TotalContainer>

      <TestWarningContainer>
        * Please use the following test credit card for payments *
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </TestWarningContainer>

      <StripeButton price={totalPrice} />
    </CheckOutContainer>
  );
};

export default connect(mapStateToProps)(CheckOut);
