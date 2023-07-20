import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const MenuOverlayStyled = styled(motion.div)`
    @media (max-width: 768px) {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 51;
        width: calc(100vw - 400px);
        height: 10vh;
        ${({ isHidden }) =>
            !isHidden &&
            css`
                backdrop-filter: blur(4px);
            `}
    }
`;
export const MenuCardContainer = styled(motion.div)`
    @media (max-width: 768px) {
        position: fixed;
        top: 58px;
        right: 0;
        z-index: 99;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;

        width: 300px;
        height: calc(100vh - 4rem);

        padding: 1rem;
        background: linear-gradient(to right, #000000, #434343);
        border: solid white;
        border-radius: 0 0 0 1rem;
        box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
    }
`;

export const CloseButtonMenu = styled.div`
    @media (max-width: 768px) {
        height: 20px;
    }
    
`;

export const CloseMenu = styled(motion.button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
    outline: none;
    border: none;
    border-radius: 10px;
    background: #EEE1C5;
    cursor: pointer;
`;

export const MainCotainerMenu = styled.div`
    height: 50%;
`;

export const TitleMenuStyled = styled.h2`
    font-weight: 500;
    font-size: 15px;
`;