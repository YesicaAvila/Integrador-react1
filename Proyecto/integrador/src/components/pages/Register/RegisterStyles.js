import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form as FormikForm } from 'formik';

export const BodyRegisterContainer = styled.body`
    background-image: url('https://res.cloudinary.com/dqhrvfasu/image/upload/v1688659217/libros_lren2e.jpg');
    background-size: cover;
    background-position: center;
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        padding: 6.5rem;
    }
    @media (max-width: 629px) {
        padding: 3rem;
    }
`;

export const LoginContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 20px;
    padding: 10px 10px 10px 10px;
    gap: 10px;
    color: black;
    background-color: rgba(255, 255, 255, 0.13);
    border: 1px solid #fb8500;
`;

export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    gap: 20px;
`;

export const LoginEmailStyled = styled(Link)`
    p {
        color: var(--gradinet-black);

        :hover{
            text-decoration: underline;
            transition: all 0.25s ease-out;
        }
    }
`;