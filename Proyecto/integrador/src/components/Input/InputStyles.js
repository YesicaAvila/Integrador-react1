import styled from 'styled-components';

export const InputBoxStyled = styled.div`
    display: flex;
    margin: 0.5rem 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.5rem;
    color: black;
`; 

export const InputLabelStyled = styled.label`
    display: flex;
    margin: 1rem 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
    font-size: 20px;
    font-weight: 700;

    @media (max-width: 1200px) {
        width: 100%;
    }
`;

export const InputStyled = styled.input`
    box-shadow: -3px -3px 9px #aaa9a9a2, 3px 3px 7px rgba(147, 149, 151, 0.671);
    background-color: rgba(255, 255, 255, 0.13);
    backdrop-filter: blur(5px);
    outline: none;
    border: ${({isError}) => (isError ? '1px solid #fb103d' : 'none')};
    border-radius: 8px;
    height: 30px;
    padding: 1rem 4rem;
    color: white;
    width: 90%;
    margin-top: 1rem;
`;

export const ErrorMessageStyles = styled.p`
    margin: 0;
    margin-top: 5px;
    color: #fb103d;
    font-size: 14px;
`;