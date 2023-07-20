import React from 'react'
import { InputBoxStyled, InputLabelStyled } from '../../Input/InputStyles'
import { ErrorMessage, Field } from 'formik'
import { ErrorStyled, TextArea } from './TextAreaInputStyles'

const TextAreaInput = ({ label, name, isError }) => {
  return (
    <InputBoxStyled>
        <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
        <Field
        name={name}
        id={label}
        error={isError}
        as={TextArea}
        />
        <ErrorMessage
            name={name}
            component={ErrorStyled}
        />
    </InputBoxStyled>
  );
};

export default TextAreaInput;