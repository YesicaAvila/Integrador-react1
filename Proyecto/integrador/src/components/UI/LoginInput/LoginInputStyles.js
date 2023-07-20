import { styled } from "styled-components";

export const InputContaineStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    font-family: 'Fasthand';
    @media (max-width: 800px) {
        padding: 5px;
    }
`;

export const LoginInputStyled = styled.input`
    width: 300px;
    height: 50px;
    padding-left: 45px;
    font-size: 18px;
    outline: none;
    border: ${({ isError }) => (isError ? '3px solid #fb103d ' : 'none')};
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.438);
    border-radius: 8px;
    background: rgba(105, 105, 105, 0);

    ::placeholder {
        opacity: 80%;
    }

    :nth-child(2) {
        margin-top: 20px;
    }
    @media (max-width: 800px) {
        width: 100%;
    }
    @media (max-width: 552px) {
        padding: 5px;
    }

`;

export const ErrorMessageStyled = styled.p`
    margin: 0;
    margin-top: 5px;
    color: red;
    font-size: 25px;
`;


