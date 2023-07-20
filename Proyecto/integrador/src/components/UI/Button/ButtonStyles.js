import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
    padding: 0.7rem 1rem;
    outline: none;
    border: none;
    border-radius: ${({ radius }) => `${radius}px`};
    background: linear-gradient(to right, #d1913c, #ffd194);
    color: black;
    text-transform: uppercase;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        opacity: 95;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
    @media (max-width: 768px) {
        padding: 0.5rem 0.2rem;
    }
`;