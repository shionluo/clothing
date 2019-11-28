import React from "react";

import StripeCheckout from "react-stripe-checkout";

//-- Style --//
import "./stripe-button.scss";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_IwNACIrw0YrKeSOphyRl1Eco00iTKKNPUN";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
