import React from 'react'
import { CategoriaContainer } from './CategoriesStyles'
import Categoria from './Categoria';
import { useSelector } from 'react-redux';

const Categorias = () => {

  const categories = useSelector(state => state.categories.cateories)

  return (
    <CategoriaContainer>
        {
            categories.map((categoria) => {
                return <Categoria {...categoria}  key={categoria.id}/>
            })
        }
    </CategoriaContainer>
  );
};

export default Categorias;