import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { ErrorMessageStyles, InputBoxStyled, InputStyled } from './InputStyles'

const Input = ({ type, placeholder, name }) => {
  return (
    <Field name={name}>
        {
            ({field, form: {errors, touched}}) => (

                <InputBoxStyled>
                    <InputStyled
                        type={type}
                        placeholder={placeholder}
                        isError={errors[field.name] && touched[field.name]}
                        {...field}
                    />
                    <ErrorMessage name={field.name}>
                        {message => <ErrorMessageStyles>{message}</ErrorMessageStyles>}
                    </ErrorMessage>
                </InputBoxStyled>
            )
        }
    </Field>
  );
};

export default Input;