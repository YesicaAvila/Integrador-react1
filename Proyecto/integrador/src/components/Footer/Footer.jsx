import React from 'react'
import { FooterContainerStyled, LinksContainerStyled } from './FooterStyles'

const Footer = () => {
  return (
    <FooterContainerStyled>
        <LinksContainerStyled>
        <span>Términos de Uso</span>
        <span>Trabaja con Nosotros</span>
        <span>Soporte</span>
        <p>Todos los derechos reservados</p>
        </LinksContainerStyled>
    </FooterContainerStyled>
  )
}

export default Footer;