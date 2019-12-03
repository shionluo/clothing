import React, { useState } from "react";

import { connect } from "react-redux";

//-- Components --//
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

//-- Actions --//
import { signUpStart } from "../../redux/user/user.actions";

//-- Style --//
import { SignUpContainer } from "./sign-up.styles";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password dont't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  return (
    <SignUpContainer>
      <h2>I don't have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="text"
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
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default connect(null, mapDispatchToProps)(SignUp);
