import styled from 'styled-components';


export const HomeWrapper = styled.div`
    width: 100%;
    max-width: 1400px;
    padding: 1.5rem;
    margin: 0 auto;
    @media (max-width: 957px) {
        width: 100%;
    }
    
`;

export const RecomendadosSection = styled.section`
    width: 100%;
    margin-top: 3rem;

    h2 {
        font-weight: 400;
        color: black;
    }
    @media (max-width: 957px) {
        width: 100%;
    }
`;

export const CategoriasWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    width: 100%;
    max-width: 1300px;

    h2{
        color: black;
    }
    @media (max-width: 844px) {
        width: 100%;
    }
    @media (max-width: 620px) {
        width: 100%;
        height: 100%;
    }
`;

export const ProductBooks = styled.section`
    padding-top: 3rem;

    h2 {
        font-weight: 400;
        color: black;
    }
    @media (max-width: 768px) {
        width: 100%;
        h2{
            text-align: center;
        }
    }
`;

export const ButtonContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 2rem;
    margin-bottom: 3rem;
    `;