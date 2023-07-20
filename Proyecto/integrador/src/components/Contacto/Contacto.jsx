import React from 'react';
import { ContactStyled, Form, Formik } from './ContactoStyles';
import Input from '../Input/Input';
import TextAreaInput from '../UI/TextAreaInput/TextAreaInput';
import Submit from '../UI/Submit/Submit';
import { contactInitialValues } from '../Formik/initialVaues';
import { contactValidationSchema } from '../Formik/validationValues';


// import { useDispatch } from 'react-redux';

const Contacto = () => {
  

  return (
    <ContactStyled className='about-us'>
        <h2>Contacto</h2>
        <Formik
          initialValues={contactInitialValues}
          validationSchema={contactValidationSchema}
          onSubmit={(values, {resetForm} ) => {
            alert("Gracias, tu mensaje fue enviado.");
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
                <Input name='name' type='text' placeholder='Nombre' />
                <Input name='email' type='text' placeholder='Email' />
                <TextAreaInput isError={errors.mensaje && touched.mensaje} name='mensaje' label='Mandanos un mensaje:' />
            <Submit>Enviar</Submit>
            </Form>
          )
          }
        </Formik>
    </ContactStyled>
  );
};

export default Contacto;