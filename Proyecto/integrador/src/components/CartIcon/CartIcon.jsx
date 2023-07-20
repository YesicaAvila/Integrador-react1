import React from 'react';
import { FaOpencart } from "react-icons/fa";
import { LinkContainerStyled } from '../Navbar/NavbarStyles';
import { toggleHiddenCart } from '../redux/cart/cartSlice';
import { useDispatch, useSelector  } from 'react-redux';

const CartIcon = () => {
  const totalCartItem = useSelector(state => state.cart.cartItems).reduce((acc, item) => (acc += item.quantity), 0)

  const dispatch = useDispatch();
  
  return (
    <LinkContainerStyled onClick={() => dispatch(toggleHiddenCart())}>
        <FaOpencart style={{color: 'white', fontSize: '1.9rem'}} />
        <span>{totalCartItem}</span>
    </LinkContainerStyled>
  );
};

export default CartIcon;