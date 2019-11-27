import React from "react";

//-- Style --//
import "./custom-button.scss";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} 
      ${inverted ? "inverted" : ""} 
      custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
