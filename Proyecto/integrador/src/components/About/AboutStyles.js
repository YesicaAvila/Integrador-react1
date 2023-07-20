import styled from 'styled-components';

export const AboutContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6rem 3rem;
    margin: 0 auto;
    max-width: 1300px;
    color: black;
    width: 100%;
    

    @media (max-width: 957px) {
        width: 100%;
        height: 100%;
    }
`;

export const AboutInfoStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
    padding: 20px;
    gap: 25px;
    height: auto;
    overflow: hidden;
    background: #EAEAEA;
    color: black;
    box-shadow: 5px 5px 5px black;
    background-image: url('https://res.cloudinary.com/dqhrvfasu/image/upload/v1689636094/fondo-about_qpkh8n.jpg');
    background-position: center;
    background-size: cover;
    h2{
        font-size: 5rem;
        font-weight: 600;
    }
    p{
        padding: 5px;
        font-size: 1.5rem;
        width: 67%;
        margin-bottom: 40px;
    }

    @media (max-width: 1200px) {
        width: 50%;
        height: 100%;
        padding: 20px;
    }
    @media (max-width: 1030px) {
        width: 90%;
        h2 {
            font-size: 3rem;
        }
    }

    @media (max-width: 910px) {
        width: 90%;
        h2{
            font-size: 2.5rem;
        }
        p{
            font-size: 21px;
        }
    }
    @media (max-width: 793px) {
        padding: 10px;
    }
    @media (max-width: 361px) {
        width: 100%;
        h2 {
            font-size: 2rem;
        }
    }
    @media (max-width: 324px) {
        width: 100%;
        padding: 4px;
        h2 {
            font-size: 1.8rem;
        }
    }
`;