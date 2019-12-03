import React, { useState } from "react";

import { connect } from "react-redux";

//-- Components --//
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

//-- Actions --//
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

//-- Style --//
import { SignInContainer, ButtonsContainer } from "./sign-in.styles";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: userCredentials =>
    dispatch(emailSignInStart(userCredentials))
});

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart({ email, password });
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <ButtonsContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default connect(null, mapDispatchToProps)(SignIn);
