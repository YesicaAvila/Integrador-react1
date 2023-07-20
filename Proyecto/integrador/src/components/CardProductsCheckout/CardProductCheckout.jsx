import React from 'react';
import { useDispatch } from 'react-redux';
import { formatPrice } from '../utils/formatPrice';
import Increase from '../UI/Increase/Increase';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import  {BiMinusCircle} from 'react-icons/bi';
import {BsTrash} from 'react-icons/bs';
import {
    CardContainerStyled, 
    CardInfoStyled, 
    PriceStyled, 
    ProductTitleStyled, 
    TextStyled, 
    QuantityContainerStyled
} from '../CardProductsCheckout/CardProductCheckoutStyles';
import { addToCart, removeCart } from '../redux/cart/cartSlice';
import Count from '../UI/Count/Count';






const CardProductCheckout = ({img, name, categoria, precio, id, quantity}) => {

    const dispatch = useDispatch();
    
  return (
    <CardContainerStyled>
        <img 
            src={img} 
            alt={name} 
        />
        <CardInfoStyled>
            <ProductTitleStyled>{name}</ProductTitleStyled>
            <TextStyled>{categoria}</TextStyled>
            <PriceStyled>{formatPrice(precio)} </PriceStyled>
        </CardInfoStyled>
        <QuantityContainerStyled>
            <Increase
                bgColor='var(--gradient-grey)'
                onClick={() => dispatch(removeCart(id))}
            >
                {quantity === 1 ? <BsTrash/> : <BiMinusCircle/>}
            </Increase>
            <Count>{quantity}</Count>
            <Increase onClick={() => dispatch(addToCart({img, name, categoria, precio, id, quantity}))}>
                <AiOutlinePlusCircle />
            </Increase>
        </QuantityContainerStyled>
    </CardContainerStyled>
  );
};

export default CardProductCheckout;