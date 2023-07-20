import React from 'react'
import { CardPrice, ContainerPrice, ProductCard } from './ProductsStyles'
import Button from '../UI/Button/Button'
import { formatPrice } from '../utils';
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/cart/cartSlice';


const CardProduct = ({img, name, precio, id}) => {

  const dispatch = useDispatch();

  return (
    <ProductCard>
        <img
            src={img}
            alt={name}
        />
        <h2>{name}</h2>
        <ContainerPrice>
            <CardPrice>{formatPrice(precio)}</CardPrice>
            <Button onClick={() => dispatch(addToCart({img, name, precio, id}))}>Agregar</Button>
        </ContainerPrice>
    </ProductCard>
  );
};

export default CardProduct;