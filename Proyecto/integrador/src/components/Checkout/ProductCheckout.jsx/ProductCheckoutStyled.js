import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
    width: 50%;
    
`;

export const ProductosTitleStyled = styled.h1`
    font-weight: 600;
    font-size: 25px;
    color: white;
    padding: 2rem;
    text-align: center;
`;

export const CardsWrappersStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    color: white;

    width: 100%;
    height: auto;
    margin: 0 auto;
`;

export const PriceContainerStyled = styled.div`
    margin: 0 auto;
    margin-top: 1rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const SubtotalStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-weight: 500;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const PriceTotalStyled = styled.span`
    color: #ff7a00;
    font-weight: 800;
    font-size: 1.5rem;
`;

export const HrStyled = styled.hr`
    margin: 1rem 0;
`;