import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSubmitStyled = styled(motion.button)`
    padding: 0.7rem 1.5rem;
    outline: none;
    border: none;
    border-radius: 10px;
    background: black;
    color: white;
    text-transform: uppercase;
    font-weight: 400;
    cursor: pointer;
    margin-top: 15px;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
    @media (max-width: 1200px) {
        width: 50%;
    }
    @media (max-width: 745px) {
        width: 100%;
    }
    @media (max-width: 472px) {
        width: 100%;
        padding: 10px;
        text-align: center;
    }
    @media (max-width: 457px) {
        width: 60%;
        padding: 10px;
    }
    @media (max-width: 336px) {
        width: 100%;
    }
`;