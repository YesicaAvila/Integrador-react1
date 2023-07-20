import styled from 'styled-components';
import { motion } from 'framer-motion';

export const IncreaseStyled = styled(motion.button)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background:  ${({ bgColor}) => bgColor || 'var(--gradient-beige)'};
    border: none;
    border-radius: 15px;
    font-size: 1.1rem;
    font-weight: 500;
    color: white;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;