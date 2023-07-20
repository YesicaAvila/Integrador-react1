import styled from 'styled-components';

export const FooterContainerStyled = styled.footer`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;
    padding: 3rem 2rem 2rem;
    bottom: 0;
    gap: 20px;
    background: black;
    span {
        display: flex;
        justify-content: space-around;
        padding: 0.5rem;
    }
    p {
        font-weight: 700;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
    @media (max-width: 362px) {
        width: 100%;
        
    }
`;

export const LinksContainerStyled = styled.div`
    margin-bottom: 2rem;
    @media (max-width: 348px) {
        width: 100%;
        p {
            text-align: center;
        }
    }
`;