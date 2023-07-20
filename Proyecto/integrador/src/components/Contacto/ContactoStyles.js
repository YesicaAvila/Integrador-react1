import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const ContactStyled = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 3rem;
    background-image: url('https://res.cloudinary.com/dqhrvfasu/image/upload/v1689179415/libro_fondo_jpmwcl.jpg');
    background-position: center;
    background-size: cover;
    box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem black;
    
    h2 {
        color: black;
        text-align: left;
    }

    @media (max-width: 698px) {
        width: 100%;
    }
`;

export const Formik = styled(FormikContainer)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

export const Form = styled(FormikForm)`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;
