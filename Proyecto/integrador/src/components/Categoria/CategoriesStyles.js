import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoriaContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 70px;
    width: 100%;
    max-width: 1300px;
    margin: 1 auto;

    @media (max-width: 844px) {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        gap: 15px;
    }
    @media (max-width: 698px) {
        padding: 15px;
    }
    @media (max-width: 589px) {
        width: 100%;
        padding: 5px;
        gap: 15px;
        margin-bottom: 10%;
    }

`;

export const CardCategory = styled(motion.div)`
    display: flex;
    width: 300px;
    height: 400px;

    h3 {
        font-weight: 600;
        color: black;
        background-color: ${({ selected }) =>
        selected ? '#F4D03F' : '#BBD2C5' };
        box-shadow: 0 3px 3px 0 rgba(0,0,0,.2);
        position: absolute;
        z-index: 1;
        padding: 0.4rem;
        border-radius: 0 0 50% 0;
    }

    img {
        width: 0px;
        flex-grow: 1;
        object-fit: cover;
        opacity: .8;
        transition: .5s ease;

    }
    img:hover {
        cursor: crosshair;
        width: 300px;
        opacity: 1;
        filter: contrast(120%);
    }

    @media (max-width: 844px) {
        width: 20%;
        height: 25%;
        gap: 15px;
        h3 {
            position: relative;
            
        }
        img {
            display: none;
        }
    }
    @media (max-width: 589px) {
        width: 30%;
        gap: 15px;
        margin-bottom: 10%;
    }
    @media (max-width: 549px) {
        width: 30%;
    }
    @media (max-width: 349px) {
        width: 50%;
    }

`;

