import React from 'react'
import { CardCategory } from './CategoriesStyles'
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../redux/categories/categoriesSlice';

export const Categoria = ({img, title, categoria}) => {

  const dispatch = useDispatch(); 

  const selectedCategory = useSelector((state) => state.categories.selectedCategory)

  return (
    <CardCategory
    selected={categoria === selectedCategory}
    onClick={() => dispatch(selectCategory(categoria)) }
    whileTap={{ scale: 0.95 }}
    >
        <h3>{title}</h3>
        <img
        src={img}
        alt={categoria}
        />
        

    </CardCategory>
  );
};

export default Categoria;