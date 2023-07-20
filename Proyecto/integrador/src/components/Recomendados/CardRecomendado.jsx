import React from 'react';
import { 
    Card, 
    CardImg, 
    CardPrice, 
    CardText, 
    CardTitle, 
} from './CardRecomendacionStyled';
import { formatPrice } from '../utils/index';
import Button from '../UI/Button/Button';
import { motion } from 'framer-motion';
import { addToCart } from '../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';


const CardRecomendado = ({name, img, precio, id}) => {

  const dispatch = useDispatch();

  return (
    <motion.div whileTap={{scale:0.9}}>
      <Card>
        <CardImg 
          src={img}
          alt={name}
        />
        <CardText>
            <CardTitle>{name}</CardTitle>
            <CardPrice>{formatPrice(precio)}</CardPrice>
        </CardText>
        <Button onClick={() => dispatch(addToCart({name, img, precio, id}))}>Agregar</Button>
      </Card>
    </motion.div>
  );
};

export default CardRecomendado;