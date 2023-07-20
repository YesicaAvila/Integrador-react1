import styled from 'styled-components';

export const CardContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 80%;
    & img {
        width: 80px;
        height: 80px;
        border-radius: 16px;
        object-fit: cover;
    }
`;

export const CardInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 50%;
`;

export const ProductTitleStyled = styled.h3`
    margin: 0;
    margin-bottom: 2px;
    font-weight: 500;
`;

export const TextStyled = styled.h3`
    margin: 0;
    color: #666;
    font-size: 1rem;
`;

export const PriceStyled = styled.span`
    font-weight: 700;
    font-size: 24px;
`;

export const QuantityContainerStyled = styled.span`
    display: flex;
    align-items: center;
`;