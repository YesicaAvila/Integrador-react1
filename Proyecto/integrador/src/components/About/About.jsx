import React from 'react'
import { AboutContainerStyled, AboutInfoStyles, } from './AboutStyles';

const About = () => {
  return (
    <AboutContainerStyled>
        <AboutInfoStyles>
        <h2>Nosotros</h2>
        <p>
        Somos una pagina de venta de libros, que brinda la mejor calidad de sus productos. 
        Tenemos diferentes géneros y precios accesibles.
        Contamos con servicios de entrega para su comodidad. Y diversos tipos de metodos de pago &#10084;
        </p>
        </AboutInfoStyles>
    </AboutContainerStyled>
  );
}

export default About;