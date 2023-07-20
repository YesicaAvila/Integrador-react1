import React from 'react';
import { BurguerStyled } from './BurguerStyles';
import { FiMenu } from 'react-icons/fi';

function BurguerButton (props) {
  return (
    <BurguerStyled>
        <FiMenu onClick={props.handleClick} 
        className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`} 
    />
    </BurguerStyled>
  )
}

export default BurguerButton;