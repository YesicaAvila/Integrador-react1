import React from 'react'
import { ContainerCheckoutStyled } from './CheckoutStyles';
import ProductCheckout from './ProductCheckout.jsx/ProductCheckout'
import { useDispatch, useSelector } from 'react-redux'
import Submit from '../UI/Submit/Submit';
import { clearCart } from '../redux/cart/cartSlice';

const Checkout = () => {

    const dispatch = useDispatch();

    const {cartItems, shippingCost} = useSelector(state => state.cart)

    const precio =  cartItems.reduce((acc, item) => {
        return (acc += item.precio * item.quantity)
    }, 0)

    const handlePurchase = () => {
        alert("Compra realizada con éxito. Gracias por su compra");
        dispatch(clearCart());
    };

  return (
    <div>
        <ContainerCheckoutStyled>
            <ProductCheckout
                cartItems={cartItems}
                shippingCost={shippingCost}
                precio={precio}
            />
            <Submit onClick={handlePurchase}>Comprar</Submit>
        </ContainerCheckoutStyled>
    </div>
  );
};

export default Checkout;