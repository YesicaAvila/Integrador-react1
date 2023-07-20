import styled from 'styled-components';

export const TextArea = styled.textarea`
    border: 1px solid;
    border-color: ${({ error }) => (error ? '#666' : 'ffffff')};
    border-radius: 5px;
    padding: 5px;
    width: 450px;
    height: 150px;
    resize: none;
    color: black;
    outline: none;
    box-shadow: -3px -3px 9px #aaa9a9a2, 3px 3px 7px rgba(147, 149, 151, 0.671);
    background-color: rgba(255, 255, 255, 0.13);
    backdrop-filter: blur(5px);
    @media (max-width: 1200px) {
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
    
`;

export const ErrorStyled = styled.span`
    padding-left: 10px;
    font-weight: 600;
    color: red;
    font-size: 15px;
`;