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
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === "displayName") {
      setDisplayName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
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
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="text"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default connect(null, mapDispatchToProps)(SignUp);
