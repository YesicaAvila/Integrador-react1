import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 98;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;

    width: 450px;
    height: calc(100vh - 4rem);
    max-width: 1300px;
    padding: 2rem;
    background: linear-gradient(to right, #000000, #434343);
    border: solid white;
    border-radius: 0 0 0 1rem;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
    @media (max-width: 1184px) {
        
    }
    @media (max-width: 768px) {
        width: 50%;
        top: 0px;
        gap: 10px;
    }
    @media (max-width: 595px) {
        width: 70%;
    }
    @media (max-width: 380px) {
        width: 100%;
    }

`;

export const CloseButtonContainerStyled = styled.div`
    height: 32px;
    @media (max-width: 620px) {
        width: 13%;
        height: 4%;
    }
`;

export const CloseButtonStyled = styled(motion.button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    outline: none;
    border: none;
    border-radius: 10px;
    background: #EEE1C5;
    cursor: pointer;
    
`;

export const TitleStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 0 1rem 0;
    margin-top: 0;

    & h2 {
        margin-top: 0;
        color: white;
    }
    @media (max-width: 768px) {
        width: 100%;
        h2 {
            font-size: 17px;
        }
    }
`;

export const MainContainerStyled = styled.div`
    height: 55%;
`;

export const ProductsWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    width: 100%;
    height: 400px;
    margin: 0 auto;
    padding: 0.5rem;

    padding-left: 0;
    overflow: scroll;

    &::-webkit-scrollbar {
        background: transparent;
    }

    &::-webkit-scrollbar:vertical {
        display: none;
    }

    @media (max-height: 800px) {
        height: 235px;
    }
    @media (max-width: 620px) {
        height: 100%;
    }
`;

export const ProductContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    width: 350px;
    box-shadow: -3px -3px 3px #d76a03, 3px 3px 7px rgb(215, 106, 3);
    background-color: rgba(255, 255, 255, 0.13);
    backdrop-filter: blur(5px);
    border: 1px solid #d76a03;
    padding: 1rem;
    border-radius: 15px;
    margin-left: 15px;
    max-width: fit-content;
    

    & img {
        width: 80px;
        height: 80px;
        border-radius: 16px;
        object-fit: cover;
    }
    @media (max-width: 768px) {
        width: 100%;

    }
    @media (max-width: 620px) {
        width: 100%;
        padding: 0.3rem 0.2rem 0.5rem 0.2rem;
        gap: 5px;
    }
`;

export const TextContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 190px;
    @media (max-width: 620px) {
        width: 100%;
        padding: 0.2rem;
    }
`;

export const CardTitleStyled = styled.h3`
    margin: 0;
    margin-bottom: 2px;
    font-weight: 400;
    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

export const TextStyled = styled.p`
    margin: 0;
    color: blue;
    font-size: 1rem;
    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

export const PriceStyled = styled.span`
    font-weight: 600;
    padding-top: 5px;
    padding: 3px;
    text-align: center;
    font-size: 1.2rem;
    background-color: brown;
    border-radius: 0.5rem;
    background-clip: text;
    @media (max-width: 768px) {
        width: 100%;
        font-size: 15px;
        padding: 0.5rem;
    }
    @media (max-width: 717px) {
        display: flex;
        text-align: center;
    }
    @media (max-width: 380px) {
        width: 100%;
    }
    @media (max-width: 327px) {
        width: 100%;
    }
`;

export const PriceContainerStyled = styled.div`
    z-index: 1000;
    background-color: black;
    border-radius: 1rem;
    position: relative;
    & p {
        text-align: center;
        margin-bottom: 0;
    }
    @media (max-width: 768px) {
        width: 100%;
        padding: 5px;
        top: -35px;
    }
`;

export const SubtotalStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const EnvioStyled = styled(SubtotalStyled)``; 

export const TotalStyled = styled(SubtotalStyled)`
    padding: 10px;
    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 8rem;
        padding: 0 0 0 5px;
        p {
            text-align: center;
            padding: 5px;
        }
    }
    @media (max-width: 717px) {
        gap: 30%;
        padding: 5px;
        span {
            text-align: center;
            
            
        }
    }
    @media (max-width: 620px) {
        width: 100%;
        gap: 3rem;
        padding: 8px;
    }
    @media (max-width: 428px) {
        width: 40%;
        gap: 10px;
    }
    @media (max-width: 380px) {
        width: 100%;
        
    }
    @media (max-width: 320px) {

    }

`;

export const ButtonContainerStyled = styled(SubtotalStyled)`
    justify-content: center;
    @media (max-width: 768px) {
        width: 100%;
        padding: 0.2rem;
    }
`;

export const QuantityContainerStyled = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
    @media (max-width: 620px) {
        width: 100%;
        flex-direction: column;
    }
`;

