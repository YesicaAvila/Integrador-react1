import React from 'react';
import { ModalOverlayStyled } from '../Navbar/NavbarStyles';
import { AnimatePresence } from 'framer-motion';
import { 
    ButtonContainerStyled, 
    CloseButtonContainerStyled, 
    CloseButtonStyled, 
    ContainerStyled, 
    EnvioStyled, 
    MainContainerStyled, 
    PriceContainerStyled, 
    PriceStyled, 
    ProductsWrapperStyled, 
    SubtotalStyled, 
    TitleStyled, 
    TotalStyled 
} from './ModalCartStyles';
import Submit from '../UI/Submit/Submit';
import Increase from '../../components/UI/Increase/Increase';
import { IoMdTrash } from 'react-icons/io';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {clearCart, toggleHiddenCart} from '../redux/cart/cartSlice';
import ModalCartCard from './ModalCartCard';
import { formatPrice } from '../utils';


const ModalCart = () => {
    const hiddenCart = useSelector(state => state.cart.hidden)
    const {cartItems, shippingCost} = useSelector(state => state.cart);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce((acc, item) => {
        return (acc += item.precio * item.quantity)
    }, 0)

  return (
    <>
        {!hiddenCart && (
            <ModalOverlayStyled 
                onClick={() => dispatch(toggleHiddenCart())}
                isHidden={hiddenCart}
            />
        )}
    
    <AnimatePresence>
        {!hiddenCart && (
            <ContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ trnaslateX: 600 }}
            transition={{ type: 'spring', damping: 27 }}
            key='cart-modal'
        >
            <CloseButtonContainerStyled>
                <CloseButtonStyled
                    className='close-modal'
                    whileTap={{ scale: 0.95 }}
                    onClick={() => dispatch(toggleHiddenCart())}
                >
                    <AiFillCloseCircle size='20px' />
                </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
                <TitleStyled>
                    <h2>Tus Productos</h2>
                    <Increase
                        onClick={() => dispatch(clearCart())}
                        
                        disabled={!cartItems.length}
                    >
                        <IoMdTrash size='20px' color='red' />
                    </Increase>
                </TitleStyled>

                <ProductsWrapperStyled>
                {
                    cartItems.length ? (
                        cartItems.map((item) => {
                            return <ModalCartCard {...item} key={item.id}/> 

                        })
                        
                    ) : (
                        <p>No hay productos en tu carrito</p>
                    )
                }
                </ProductsWrapperStyled>
            </MainContainerStyled>

            <PriceContainerStyled>
                <SubtotalStyled>
                    <p>Subtotal:</p>
                    <span>{formatPrice(totalPrice)}</span>
                </SubtotalStyled>
                <EnvioStyled>
                    <p>Envio</p>
                    <span>{formatPrice(shippingCost)}</span>
                </EnvioStyled>
                <hr />
                <TotalStyled>
                    <p>Total:</p>
                    <PriceStyled>{formatPrice(totalPrice + shippingCost)}</PriceStyled>
                </TotalStyled>
                <ButtonContainerStyled>
                    <Submit onClick={() => {
                        navigate('/checkout');
                        dispatch(toggleHiddenCart())
                    }}
                    disabled={!cartItems.length}
                    >Iniciar Pedido</Submit>
                </ButtonContainerStyled>
            </PriceContainerStyled>
        </ContainerStyled>
        )}
        
    </AnimatePresence>
    </>
  );
};

export default ModalCart;