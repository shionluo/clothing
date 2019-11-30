import React from "react";

//-- Style --//
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from "./form-input.styles";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? <FormInputLabel {...otherProps}>{label}</FormInputLabel> : null}
    </GroupContainer>
  );
};

export default FormInput;
