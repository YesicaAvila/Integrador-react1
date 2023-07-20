import React from 'react';
import { CardTitleStyled, PriceStyled, ProductContainerStyled, QuantityContainerStyled, TextContainerStyled, TextStyled } from './ModalCartStyles';
import Increase from '../UI/Increase/Increase';
import { BsBookmarkPlus } from 'react-icons/bs';
import Count from '../UI/Count/Count';
import { useDispatch } from 'react-redux';
import { addToCart, removeCart } from '../redux/cart/cartSlice';
import { formatPrice } from '../utils';
import { BiBookmarkMinus } from 'react-icons/bi';

const ModalCartCard = ({img, name, categoria, precio, quantity, id}) => {

    const dispatch = useDispatch();

  return (
    <ProductContainerStyled>
        <img 
            src={img} 
            alt={name}
        />
        <TextContainerStyled>
            <CardTitleStyled>{name}</CardTitleStyled>
            <TextStyled>{categoria}</TextStyled>
            <PriceStyled>{formatPrice(precio)}</PriceStyled>
        </TextContainerStyled>
        <QuantityContainerStyled>
            <Increase
                
                onClick={() => dispatch(removeCart(id))}
            >
                <BiBookmarkMinus size='24px' />
            </Increase>
            <Count>{quantity}</Count>
            <Increase onClick={() => dispatch(addToCart({img, name, categoria, precio, quantity, id}))}>
                <BsBookmarkPlus size='22px' />
            </Increase>
        </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;