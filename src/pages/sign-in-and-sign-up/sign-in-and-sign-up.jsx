import React from "react";

//-- Components --//
import SignIn from "../../components/Sign-In/sign-in";
import SignUp from "../../components/Sign-Up/sign-up";

//-- Style --//
import "./sign-in-and-sign-up.scss";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
