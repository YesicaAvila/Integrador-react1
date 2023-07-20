import React, { useState } from 'react';
import { ProductosContainer } from './ProductsStyles';
import { ButtonContainerStyled } from '../pages/Home/HomeStyles';


import CardProducto from './CardProducto';
import Button from '../UI/Button/Button';
import { useSelector } from 'react-redux';
import { INITIAL_LIMIT } from '../utils';



const CardsProductos = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT)

    let products = useSelector(state => state.products.products )
    const selectedCategory = useSelector(state => state.categories.selectedCategory)
    const totalProducts = useSelector((state) => state.products.totalProducts)

    if(selectedCategory) {
      products = {
        [selectedCategory]: products[selectedCategory]
      }
    }


  return (
    <>
        <ProductosContainer>
          {
            Object.entries(products).map(([,books]) => {
              return books.map((book) => {
                if (limit >= book.id || selectedCategory){
                  return <CardProducto {...book} key={book.id} />
                }
                return null
              })
            })
          }
        </ProductosContainer>
        {
          !selectedCategory && (
            <ButtonContainerStyled>
                <Button onClick={() => setLimit(prevLimit => prevLimit - INITIAL_LIMIT)}
                secondary='true'
                disabled={INITIAL_LIMIT === limit}
                >Ver menos
                </Button>
                <Button onClick={() => setLimit(prevLimit => prevLimit + INITIAL_LIMIT)}
                disabled={totalProducts <= limit}
                >
                Ver más
                </Button>
            </ButtonContainerStyled>
          )
        }
    </>
  );
};

export default CardsProductos;