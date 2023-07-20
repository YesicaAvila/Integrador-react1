import React, { useRef } from "react";
import { CategoriasWrapper, HomeWrapper, ProductBooks, RecomendadosSection } from "./HomeStyles";
import Hero from '../../Hero/Hero';
import About from '../../About/About';
import CardsRecomendados from "../../Recomendados/CardsRecomendados";
import Categorias from "../../Categoria/Categorias";
import CardsProductos from "../../Productos/CardsProductos";
import Contacto from "../../Contacto/Contacto";





function Home() {

    const productsRef = useRef();

    const doScroll = () => {
        window.scrollTo(
            productsRef.current.getBoundingClientRect().x,
            productsRef.current.getBoundingClientRect().y,
        )
    };

    return (
        <HomeWrapper>
            <Hero doScroll={doScroll} />
            <About />
            <RecomendadosSection>
                <h2>Recomendados:</h2>
                <CardsRecomendados />
            </RecomendadosSection>
            <CategoriasWrapper className="categoria">
                <h2>Categorias:</h2>
                <Categorias />
            </CategoriasWrapper>
            <ProductBooks ref={productsRef}>
                <h2>Nuestros Productos:</h2>
                <CardsProductos />
            </ProductBooks>
            <Contacto />
        </HomeWrapper>
    );
};

export default Home;