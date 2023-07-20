import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ModalContainerStyled = styled(motion.div)`
    position: absolute;
    background-color: black;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
    width: 445px;
    top: calc(115px + 1.6rem);
    right: 0;
    z-index: 99;
    border-radius: 1rem ;
    padding: 2rem;
    

    & span {
        display: flex;
        gap: 10px;
        margin-top: 10px;
        cursor: pointer;

        &:hover {
            opacity: 90%;
        }
    }
`;

export const LinkStyled = styled(Link)`
    &:hover {
        opacity: 90%;
    }
`;

export const UsernameStyled = styled.h2`
    font-weight: 300;
    color: white;

`;

export const HrStyled = styled.hr`
    margin: 1.8rem 0;
    color: red;
`;