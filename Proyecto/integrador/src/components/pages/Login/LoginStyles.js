import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const BodyContainer = styled.body`
    background-image: url('https://res.cloudinary.com/dqhrvfasu/image/upload/v1687653615/logo/pexels-min-an-1448709_z8xlsr.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    font-family: 'Fasthand';
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 800px) {
        width: 100%;
    }
    @media (max-width: 457px) {
        width: 100%;
    }
`;


export const LoginContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 120px;
    margin-bottom: 50px;
    color: white;
    width: 38%;
    border-radius: 10px;
    padding: 40px 10px;
    box-shadow: -3px -3px 9px #aaa9a9a2, 3px 3px 7px rgba(147, 149, 151, 0.671);
    background-color: rgba(255, 255, 255, 0.13);
    backdrop-filter: blur(5px);
    filter: contrast(100%);
    @media (max-width: 457px) {
        width: 100%;
    }
`;

export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 2rem;
    @media (max-width: 800px) {
        width: 100%;
    }
`;

export const LoginEmailStyled = styled.p`
    text-align: center;
    color: black;
    font-size: 25px;

    :hover {
        text-decoration: underline;
        transition: all 0.25s ease-out;
    }
`;