import styled from 'styled-components';

export const HeroContainerStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    max-width: 1300px;
    margin: 0 auto;
    box-shadow: 5px 5px 5px 5px #434343;
    border: 1px solid white;

    @media (max-width: 1200px) {
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }

    @media (max-width: 957px) {
        width: 100%;
        margin-top: 2.5rem;
        padding-bottom: 1rem;
        & img {
            width: 100%;
        }
    
    }
    @media (max-width: 877px) {
        width: 100%;
        & img {
            display: none;
        }
    }
    @media (max-width: 320px) {
        width: 100%;
        margin: 0 auto;
        & img {
            display: none;
        }
    }
    
`;

export const HeroInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 50%;
    h1 {
        font-family: 'Fasthand';
        text-align: center;
        font-weight: 500;
        color: white;
        font-size: 90px;
    }
    p {
        text-align: center;
        color: white;
        font-size: 40px;
        gap: 10px;
    }

    @media (max-width: 1200px) {
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 60px;
        h1 {
            width: 60%;
            font-size: 50px;
            text-align: center;
        }
        p {
            width: 50%;
            font-size: 25px;
        }
    }
    @media (max-width: 320px) {
        width: 100%;
        padding-left: 10px;
        h1 {
            font-size: 40px;
        }
        p {
            width: 90%;
            font-size: 20px;
        }
    }
`;
export const HeroFormStyled = styled.form`
    display: flex;
    gap: 15px;
    position: relative;
    padding-top: 1.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 50%;
    }
    @media (max-width: 320px) {
        width: 100%;
    }
`;

export const HeroSearchBarStyled = styled.input`
    background-color: white;
    outline: none;
    border: none;
    border-radius: 15px;
    padding: 0.7rem 2.7rem;
    color: gray;
`;

export const IconStyled = styled.div`
    position: absolute;
    top: 2.1rem;
    left: 12px;
    font-size: 1.1rem;
`;

export const HerobtnStyled = styled.input`
    padding:0.8rem 1.5rem;
    outline: none;
    border: none;
    border-radius: 1rem;
    background: var(--gradient-beige);
    color: white;
    text-transform: uppercase;
    font-weight: 400;
    cursor: pointer;
`;
