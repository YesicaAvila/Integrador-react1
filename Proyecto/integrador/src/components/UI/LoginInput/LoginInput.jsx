import { ErrorMessage, Field } from 'formik';
import React from 'react';
import { ErrorMessageStyled, InputContaineStyled, LoginInputStyled } from './LoginInputStyles';


const LoginInput = ({name, type, placeholder}) => {
  return (
    <Field name={name}>
      {
        ({field, form: {errors, touched}}) => (
          <InputContaineStyled>
            <LoginInputStyled 
            type={type} 
            placeholder={placeholder}
            {...field}
            isError= {errors[field.name] && touched[field.name]}
            />
            <ErrorMessage name={field.name}>
              {message => <ErrorMessageStyled>
                {message}
              </ErrorMessageStyled> }
            </ErrorMessage>
          </InputContaineStyled>
        )
      }
    </Field>
  );
};

export default LoginInput;