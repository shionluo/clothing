import React from "react";

//-- Components --//
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

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
