import React from 'react'
import { CardsWrappersStyled, EnvioStyled, HrStyled, PriceContainerStyled, PriceTotalStyled, ProductosContainerStyled, ProductosTitleStyled, SubtotalStyled, TotalStyled } from './ProductCheckoutStyled'
import CardProductCheckout from '../../CardProductsCheckout/CardProductCheckout';
import { formatPrice } from '../../utils/formatPrice';

const ProductCheckout = ({cartItems, shippingCost, precio}) => {
  return (
    <ProductosContainerStyled>
        <ProductosTitleStyled>Tu Pedido</ProductosTitleStyled>
        <CardsWrappersStyled>
            {
                cartItems.length ? (
                    cartItems.map((item) => {
                        return <CardProductCheckout {...item} key={item.id} />
                    })
                )
                : (
                    <p>No hay productos</p>
                )
            }
        </CardsWrappersStyled>
        <PriceContainerStyled>
            <SubtotalStyled>
                <p>Subtotal:</p>
                <span>{formatPrice(precio)} </span>
            </SubtotalStyled>
            <EnvioStyled>
                <p>Envío:</p>
                <span>{formatPrice(shippingCost)}</span>
            </EnvioStyled>
            <HrStyled />
            <TotalStyled>
                <p>Total:</p>
                <PriceTotalStyled>{formatPrice(precio + shippingCost)}</PriceTotalStyled>
            </TotalStyled>
        </PriceContainerStyled>
    </ProductosContainerStyled>
  );
};

export default ProductCheckout;