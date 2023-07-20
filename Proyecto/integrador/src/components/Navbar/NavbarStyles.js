import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const NavbarContainerStyled = styled.header`
    width: 100%;
    height: 80px;
    border: double white 0.2rem;
    box-shadow: 2px 2px 2px black;
    border-radius: 0.5rem;
    position: fixed;
    background: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
    top: 0;
    padding: 1rem 4rem;
    
    @media (max-width: 1400px) {
        width: 100%;
        left: 0;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 10%;
        img {
            width: 68%;
        }
    }
    @media (max-width: 320px) {
        display: flex;
        width: 100%;
        justify-content: space-around;
        gap: 15px;
    }

`;

export const ModalOverlayStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: calc(100vw - 450px);
    height: 100vh;

    ${({ isHidden }) =>
        !isHidden &&
        css`
            backdrop-filter: blur(4px);
        `}
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const LinksContainerStyled = styled.div`
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    a {
        padding: 0.6rem 1.2rem;
    }
    a:first-child {
        border: solid white 0.1rem;
        box-shadow: 2px 2px 2px gray;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
`;

export const LinkContainerStyled = styled.div`
    font-size: 1.1rem;
    color: ${(props) => (props.home ? "#ffffff" : "#ce4257")};
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
    display: flex;
`;

export const HomeContainerStyled = styled(LinkContainerStyled)`
    display: flex;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const CartStyled = styled.div`
    position: relative;
    cursor: pointer;
    span {
        position: absolute;
        top: 0;
        height: 17px;
        width: 18px;
        text-align: center;
        border-radius: 1rem;
        border: 1px solid white;
        color: white;
        background-color: red;
        font-size: 0.8rem;
    }
`;

export const MenuContainerStyled = styled.div`
    display: none;
    align-items: center;
    cursor: pointer;
    z-index: -1;

    a {
        color: blue;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        margin-right: 1rem;
    }
    .links {
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .6s ease;
        a {
            font-size: 1.5rem;
            display: block;
        }
    }
    @media (max-width: 768px) {
        display: flex;
        position: initial;
        margin: 0;
        a {
            font-size: 1.3rem;
            display: inline;
        }
        display: block;
    }

    .links.active {
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a {
            margin-top: 5rem;
            padding: 2px;
            color: black;
            font-size: 1.3rem;
        }
    }
    
`;

export const BackgroundDiv = styled.div`
    background: linear-gradient(to right, #d1913c, #ffd194);
    position: absolute;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease;
    &.active {
        border-radius: 0 0 80% 0;
        top: calc(76px + 1rem);
        left: 0;
        width: 100%;
        height: 30rem;
    }
`;


export const UserNavStyled = styled.div`
    gap: 15px;
    cursor: pointer;
    span {
        color: white;
        font-size: 1.1rem;
        margin-right: 20px;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

export const SpanStyled = styled.span`
    &:hover {
        text-decoration: underline;
    }
`;