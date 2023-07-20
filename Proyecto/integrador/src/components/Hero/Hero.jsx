import React from 'react'
import { HeroContainerStyled, HeroFormStyled, HeroInfoContainer, HeroSearchBarStyled, IconStyled } from './HeroStyles'
import Button from '../UI/Button/Button';
import { FcSearch } from 'react-icons/fc';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectCategory} from '../redux/categories/categoriesSlice';


const Hero = ({doScroll}) => {

  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const listOfCategories = useSelector((state) => state.categories.cateories).map((categoria) => {
    return categoria.categoria
  });

  const handlerSubmit = (e) => {
    e.preventDefault();

    const nuevaCat = value.trim().toLowerCase().split(" ").join("");

    const selectedCategory = listOfCategories.find((categoria) => {
      return categoria.toLowerCase() === nuevaCat
    });

    if (selectedCategory) {
      dispatch(selectCategory(selectedCategory))
      doScroll();

    } else {
      return alert("Género no encontrado")
    }

    setValue("")

  }


  return (
    <HeroContainerStyled>
        <HeroInfoContainer>
            <h1>Abre tu mente</h1>
            <p>"Hay grandes libros en el mundo, y grandes mundos en los libros"</p>
            <HeroFormStyled>
              <HeroSearchBarStyled 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type='text'
                placeholder='Busque su Género Literario'
              />
              <IconStyled>
                <FcSearch />
              </IconStyled>
              <Button onClick={e => handlerSubmit(e)} disabled={!value}>
              Buscar
              </Button>
            </HeroFormStyled>
        </HeroInfoContainer>
        <div>
            <img style={{borderRadius: '1rem'}}
            src='https://res.cloudinary.com/dqhrvfasu/image/upload/c_scale,w_495/v1687556795/logo/pexels-alana-sousa-3409497_ac63fo.jpg'
            alt='portada'
            />
        </div>
    </HeroContainerStyled>
  );
}

export default Hero