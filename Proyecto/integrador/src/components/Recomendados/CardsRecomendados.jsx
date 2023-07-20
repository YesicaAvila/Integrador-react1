import React from 'react';
import { CardsContainer } from './CardRecomendacionStyled';
import CardRecomendado from './CardRecomendado';
import { useSelector } from 'react-redux';

const CardsRecomendados = () => {

  const recommended = useSelector(state => state.recommended.recommended)

  return (
    <CardsContainer gridLength={recommended.length}>
        {
            recommended.map((recomendado) => {
                return <CardRecomendado {...recomendado} key={recomendado.id} />
            })
        }
    </CardsContainer>
  )
}

export default CardsRecomendados;