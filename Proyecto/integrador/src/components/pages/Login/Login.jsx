import React from 'react';
import { BodyContainer, Form, LoginContainerStyled, LoginEmailStyled } from './LoginStyles';
import { Formik } from 'formik';
import LoginInput from '../../UI/LoginInput/LoginInput';
import { Link } from 'react-router-dom';
import Submit from '../../UI/Submit/Submit';
import { loginInitialValues } from '../../Formik/initialVaues';
import { loginValidationSchema } from '../../Formik/validationValues';
import { useDispatch } from 'react-redux';

import {setCurrentUser} from '../../redux/user/userSlice';
import useRedirect from '../../Hooks/useRedirect';



const Login = () => {

    const dispatch = useDispatch();

    const onSubmit = async (values, actions) => {
        const user = {
        name: values.name,
        email: values.email,
        password: values.password,
        };
        dispatch(setCurrentUser(user));
        actions.resetForm()

    };

    useRedirect("/")

  return (
    <BodyContainer>
            <LoginContainerStyled>
                <h1>Iniciar Sesión</h1>
                <Formik
                    initialValues={loginInitialValues}
                    validationSchema={loginValidationSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <LoginInput name="name" type='text' placeholder='Nombre' />
                        <LoginInput name="email" type='text' placeholder='Email' />
                        <LoginInput name="password" type='password' placeholder='Password' />
                        <Link to='/forgot-password'>
                        </Link>
                        <Link to='/register'>
                            <LoginEmailStyled>¿No tenes cuenta? Crea una cuenta</LoginEmailStyled>
                        </Link>
                        <Submit>
                            Ingresar
                        </Submit>
                    </Form>
                </Formik>
            </LoginContainerStyled>
    </BodyContainer>
    
  );
};

export default Login;