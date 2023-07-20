import { styled } from "styled-components";


export const ProductosContainer = styled.div`
    display: grid;
    place-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 390px);
    row-gap: 2rem;
    width: 100%;
    padding: 1rem;
`;

export const ProductCard = styled.div`
    background: #2b2b2c;
    width: 250px;
    border-radius: 15px;
    padding: 1rem;
    img {
        width: 100%;
        margin-bottom: 0.8rem;
    }
    h2 {
        font-size: 20px;
        font-weight: 500;
        margin: 0;
        color: white;
    }
    @media (max-width: 768px) {
    width: 250px;
    text-align: left;
}
`;

export const ContainerPrice = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CardPrice = styled.div`
    font-weight: 600;
    font-size: 1.4rem;
    background: var(--gradient-beige);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`; 