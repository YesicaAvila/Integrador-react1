import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleHiddenMenu } from '../redux/menu/menuSlice';
import {CgMenuRound} from 'react-icons/cg';
import { LinkContainerStyled } from '../Navbar/NavbarStyles';

const MenuIcon = () => {

    const dispatch = useDispatch();

  return (
    <LinkContainerStyled onClick={() => dispatch(toggleHiddenMenu())}>
        <CgMenuRound style={{ fontSize: '1.9rem'}} />
    </LinkContainerStyled>
  )
}

export default MenuIcon