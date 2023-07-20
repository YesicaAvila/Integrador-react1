import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ContainerLinkStyled = styled(motion.div)``;

export const StyledLink = styled(Link)`
    padding: 0.8rem 1.5rem;
    outline: none;
    border: none;
    border-radius: ${({ radius }) => `${radius}px`};
    background: var(--gradient-black);
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    z-index: 2;

    & span {
        font-weight: 700;
        font-size: 1rem;
        color: white;
    }
`;